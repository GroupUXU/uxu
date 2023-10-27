import type { PostListData } from 'design-system';
import { createSlug } from 'utils';
import type { GetArticlesQuery } from '../../../gql';
import { createSlugForType } from '../../function/createSlugForType';
import { adapterImageData } from '../adapterImageData';
import { adapterAuthorData } from '../adapterAuthorData';

export function adapterArticlesData(getArticles: GetArticlesQuery, typeImg: 'thumbnail' | 'small' | 'medium' | 'large' | 'url' ): Array<PostListData> {
  if (!getArticles.articles?.data.length) return [];

  return getArticles.articles.data.map(art => ({
      id: art.id || "",
      title: art.attributes?.title || "",
      slug: `${createSlugForType ( art.attributes?.type || "" )}/${art.id}/${createSlug ( art.attributes?.title || "" )}`,
      createdAt: art.attributes?.createdAt ? new Date ( art.attributes.createdAt as string ) : new Date (),
      authors: art.attributes?.authors?.data.map ( adapterAuthorData ) ?? [],
      cover: adapterImageData ( {image: art.attributes?.cover.data?.attributes, typeImg} ),
      stats: {ratings: 0, comments: 0, views: 0},
    }));
}
