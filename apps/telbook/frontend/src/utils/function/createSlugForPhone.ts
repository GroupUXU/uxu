export const createSlugForPhone = (phone: string): string => {
 return `/p/${phone.replace(/\s+/g, '')}`
};
