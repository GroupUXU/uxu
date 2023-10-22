export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lead: ComponentContentPartsLead;
  title: Scalars['String']['output'];
  type: Enum_Article_Type;
};

export type ComponentContentPartsLead = {
  __typename?: 'ComponentContentPartsLead';
  id: Scalars['ID']['output'];
  lead: Scalars['String']['output'];
};

export enum Enum_Article_Type {
  Article = 'article',
  Service = 'service'
}

export type Query = {
  __typename?: 'Query';
  searchResults: SearchResults;
};


export type QuerySearchResultsArgs = {
  query: Scalars['String']['input'];
};

export type SearchResults = {
  __typename?: 'SearchResults';
  hits?: Maybe<Array<Maybe<Article>>>;
};
