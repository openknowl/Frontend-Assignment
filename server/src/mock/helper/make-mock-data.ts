import fs = require('fs');
import jsonPath from 'lib/json-path';

import makeContents from './make-contents';
import makeBanners from './make-banners';

const makeMockData = async () => {
  const { mockContents } = await makeContents();
  const { mockBanners } = makeBanners();

  const jsonContents = JSON.stringify(mockContents);
  const jsonBanners = JSON.stringify(mockBanners);

  fs.writeFileSync(jsonPath('contents'), jsonContents);
  fs.writeFileSync(jsonPath('banners'), jsonBanners);
};

if (fs.existsSync(jsonPath('contents')) && fs.existsSync(jsonPath('banners'))) {
  const message =
    '이미 목업 데이터가 존재합니다. 새로 만들기를 원한다면 목업 데이터를 모두 삭제하고 다시 시도 해주세요.';
  throw new Error(message);
}

console.log('Making Mocks, please wait...');
makeMockData();
