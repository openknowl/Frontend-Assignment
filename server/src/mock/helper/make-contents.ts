import miniinternScraper from './miniintern-scraper';
import urlScraper from './url-scraper';
import { randomDate } from './utils';

import { content } from 'types/content';

const makeContents = async () => {
  const mockContents: content[] = [];

  for (let i = 1; i <= 4; i++) {
    const { list } = await miniinternScraper(i);
    mockContents.push(...list);
  }

  for (let i = 0; i < mockContents.length; i++) {
    const mockDate = randomDate(new Date(2018, 0, 1), new Date());
    mockContents[i].id = i + 1;
    mockContents[i].createdAt = mockDate;
    mockContents[i].updatedAt = mockDate;
    mockContents[i].company = await urlScraper(mockContents[i].company);
  }

  return { mockContents };
};

export default makeContents;
