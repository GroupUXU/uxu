import { compose, toLower, replace, trim } from 'ramda';

export const createSlug = compose(replace(/\s+/g, '-'), toLower, trim );
