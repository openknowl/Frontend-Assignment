import { content } from 'types/content';

export const orderByCompany = (contents: content[]): content[] => {
  contents.sort((a: content, b: content) => {
    const x = a.company.toLowerCase();
    const y = b.company.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  return contents;
};

export const orderByCreatedAt = (contents: content[]): content[] => {
  contents.sort((a: content, b: content) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    return 0;
  });

  return contents;
};
