import cheerio = require('cheerio');
import getHtml from './get-html';

const urlScraper = async (url: string) => {
  if (!url) {
    throw new Error('NO_URL');
  }

  const html = await getHtml(url);
  const $ = cheerio.load(html.data);

  try {
    const company = $('title').text().split(' | ')[0];

    return company;
  } catch (err) {
    throw new Error(err);
  }
};

export default urlScraper;
