import cheerio = require('cheerio');
import getHtml from './get-html';

import { content } from 'types/content';

const miniinternScraper = async (start: number) => {
  if (!start) {
    throw new Error('NO_PARAMS');
  }

  const url = `https://miniintern.com/projects?page=${start}`;
  const html = await getHtml(url);
  const $ = cheerio.load(html.data);

  const $ls = $('.ProjectCard__Container-neghqd-3');

  const list: content[] = [];
  $ls.each((idx, node) => {
    list.push({
      id: null,
      createdAt: null,
      updatedAt: null,
      thumbnail: $(node)
        .find('.ProjectCard__ImageWrapper-neghqd-5 > img')
        .attr('src'),
      title: $(node)
        .find('.ProjectCard__Infos-neghqd-4 > p.project-card-title')
        .text(),
      company: `https://miniintern.com${$(node).find('a').attr('href')}`,
    });
  });

  return { list };
};

export default miniinternScraper;
