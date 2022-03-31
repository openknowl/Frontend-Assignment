import axios from 'axios';

const getHtml = async (url: string) => {
  if (!url) {
    throw new Error('NO_URL');
  }

  try {
    return await axios.get(url);
  } catch (err) {
    throw new Error(err);
  }
};

export default getHtml;
