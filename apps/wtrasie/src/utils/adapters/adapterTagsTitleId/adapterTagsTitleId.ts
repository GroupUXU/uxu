import { createSlug } from "utils";
import { createSlugForType } from "../../function";
import type { GetTagsListQuery } from '../../../gql';
import type { List, Item } from './types';

function parseItem(item: Item): { id: string, title: string, slug: string } | null {
  const id = item.id;
  const title = item.attributes?.title ?? null;

  if (id && title) {
    return {
      id,
      title,
      slug: `${createSlugForType('tag')}/${id}/${createSlug(title)}`
    };
  }
  return null;
}

export function adapterTagsTitleId(getTagsList: GetTagsListQuery): List {
  const data = getTagsList.tags?.data;
  if (!data || !Array.isArray(data)) return [];

  const parsedData = data.map(parseItem).filter(Boolean) as Array<{ id: string, title: string, slug: string }>;
  return parsedData;
}
