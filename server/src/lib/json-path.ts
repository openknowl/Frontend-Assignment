import path = require('path');

const jsonPath = (jsonName: string) => {
  return jsonName === 'contents'
    ? path.join(process.cwd(), '/src/mock/contents.json')
    : path.join(process.cwd(), '/src/mock/banners.json');
};

export default jsonPath;
