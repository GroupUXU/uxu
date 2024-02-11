import { compose, replace, toLower, trim } from 'ramda';


const polishCharMap: Map<string, string> = new Map ( [
  ['ą', 'a'],
  ['ć', 'c'],
  ['ę', 'e'],
  ['ł', 'l'],
  ['ń', 'n'],
  ['ó', 'o'],
  ['ś', 's'],
  ['ź', 'z'],
  ['ż', 'z'],
] );


function replacePolishChars ( char: string ): string {
  return polishCharMap.get ( char ) || char;
}


function sanitize ( input: string ): string {
  return replace ( /[^a-z0-9]+/g, '-', input );
}


function trimHyphens ( input: string ): string {
  return replace ( /^-+|-+$/g, '', input );
}


export function createSlug(input: string): string {

  const composedFunction = compose(
    trimHyphens,
    sanitize,
    (input: string) => replace(/[ąćęłńóśźż]/g, replacePolishChars, input),
    toLower,
    trim
  );

  return composedFunction(input);
}

