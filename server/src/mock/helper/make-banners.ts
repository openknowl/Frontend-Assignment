import { randomDate } from './utils';

import { banner } from 'types/banner';

const makeBanners = () => {
  const mockBanners: banner[] = [];

  for (let i = 1; i <= 15; i++) {
    const mockDate = randomDate(new Date(2018, 0, 1), new Date());
    const mockBanner: banner = {
      id: i,
      image:
        'https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/23810/e13bb4e0-a59a-445d-b1c5-b30a0297c246/miniintern1PC.png',
      link: 'https://miniintern.com/',
      createdAt: mockDate,
      updatedAt: mockDate,
    };
    mockBanners.push(mockBanner);
  }

  return { mockBanners };
};

export default makeBanners;
