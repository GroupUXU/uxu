export const createSlugForType = (type: string): string => {
  console.log(type)
  switch (type) {
    case 'article':
    case 'ARTICLE':
      return '/a';
    case 'tag':
    case 'TAG':
      return '/t';
    case 'service':
    case 'SERVICE':
      return '/s';
    case 'phone':
    case 'PHONE':
      return '/p';
    default:
      return '';
  }
};
