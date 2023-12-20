export const createSlugForType = (type: string): string => {
  switch (type) {
    case 'article':
      return '/a';
    case 'tag':
      return '/t';
    case 'service':
      return '/s';
    default:
      return '';
  }
};
