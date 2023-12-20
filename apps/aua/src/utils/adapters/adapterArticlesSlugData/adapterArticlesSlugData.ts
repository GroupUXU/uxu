import { createSlug } from "utils";
import { createSlugForType } from "../../function/createSlugForType";
import type { GetArticlesQuery } from '../../../gql';
import type { ArticleWithSlug } from './types';

const parseArticleData = (articleData: NonNullable<NonNullable<NonNullable<GetArticlesQuery['articles']>['data']>[number]>): ArticleWithSlug | null => {
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

export function adapterArticlesSlugData( getArticlesList: GetArticlesQuery): Array<ArticleWithSlug> {

  const data = getArticlesList.articles?.data;
  if (!Array.isArray(data)) {
    return [];
  }

  return data.reduce((acc: Array<ArticleWithSlug>, articleData) => {
    const parsedData = parseArticleData(articleData);
    return parsedData ? [...acc, parsedData] : acc;
  }, []);
};
