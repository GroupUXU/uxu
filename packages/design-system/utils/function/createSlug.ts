import { compose, replace, toLower, trim } from 'ramda';

const polishCharMap = new Map([
  ['ą', 'a'],
  ['ć', 'c'],
  ['ę', 'e'],
  ['ł', 'l'],
  ['ń', 'n'],
  ['ó', 'o'],
  ['ś', 's'],
  ['ź', 'z'],
  ['ż', 'z'],
]);

const replacePolishChars = replace(/[ąćęłńóśźż]/g, (char: string) => polishCharMap.get(char) || char);

const sanitize = replace(/[^a-z0-9]+/g, '-');
const trimHyphens = replace(/^-+|-+$/g, '');
export const createSlug = compose(
  trimHyphens,
  sanitize,
  replacePolishChars,
  toLower,
  trim
);
