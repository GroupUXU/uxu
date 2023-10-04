import type { PostViewData } from 'design-system';
import type { GetArticleQuery } from '../../../gql';
import { adapterImageData } from "../adapterImageData";
import { adapterAuthorData } from "../adapterAuthorData";
import { adapterTagData } from "../adapterTagData";
import { adapterContentPart } from "../adapterContentPart";

export function adapterArticleData(getArticleData: GetArticleQuery): PostViewData {

  if (!getArticleData.article?.data) return {
    id: "",
    lead: "",
    type: "",
    title: "",
    createdAt: new Date(),
    cover: null,
    authors: [],
    tags: [],
    stats: { ratings: 0, comments: 0, views: 0 },
    contentparts: [],
  };

  const { id, attributes } = getArticleData.article.data;

  return {
    id: id ?? '',
    type: attributes?.type ?? '',
    title: attributes?.title ?? '',
    lead: attributes?.lead.lead ?? '',
    createdAt: attributes?.createdAt ? new Date(attributes.createdAt as string) : new Date(),
    cover: adapterImageData( { image: attributes?.cover.data?.attributes, typeImg: 'medium' }),
    authors: attributes?.authors?.data.map(adapterAuthorData) ?? [],
    tags: attributes?.tags?.data.map(adapterTagData) ?? [],
    stats: { ratings: 0, comments: 0, views: 0 },
    contentparts: attributes?.contentparts.map(adapterContentPart) ?? [],
  };
};
