import type { Tag } from "utils";
import { createSlug } from "utils";
import { createSlugForType } from "../../function";
import type { AdapterTagDataProps } from "./types";

export function adapterTagData(tag?: AdapterTagDataProps): Tag {
  return ({
    id: tag?.id || "",
    title: tag?.attributes?.title ?? "",
    slug: `${createSlugForType ( 'tag' )}/${tag?.id || ""}/${createSlug( tag?.attributes?.title || "" )}`,
  });
}