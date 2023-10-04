import { createSlug } from "design-system";
import { createSlugForType } from "../../function/createSlugForType";
import type { GetArticlesQuery } from '../../../gql';
import type { GetDataTypes, List, ArticleData } from './types';

const parseArticleData = (articleData: ArticleData): { id: string, title: string, slug: string } | null => {
  const { id, attributes } = articleData;
  if (!id || !attributes?.title) {
    return null;
  }
  return {
    id,
    title: attributes.title,
    slug: `${createSlugForType(attributes.type)}/${id}/${createSlug(attributes.title)}`
  };
};

const parseToList = (getArticlesList: GetArticlesQuery): List => {
  const data = getArticlesList.articles?.data;
  if (!Array.isArray(data)) {
    return [];
  }
  return data.reduce((acc: List, articleData) => {
    const parsedData = parseArticleData(articleData);
    return parsedData ? [...acc, parsedData] : acc;
  }, []);
};

export const adapterArticlesSlugData = ( getArticlesList: GetArticlesQuery): GetDataTypes => {
  return parseToList(getArticlesList);
};
