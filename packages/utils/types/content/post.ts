import { Image } from "./image";
import { Member } from "./member";
import { Tag } from "./tag";
import { ChunkProps } from "../../../design-system/components/molecules/contentPartDisplay/types";

export type PostShort = {
  id: string;
  lead?: string;
  title: string;
  slug: string;
  cover?: Image;
  authors: Array<Member>;
}

export type PostFull = {
  id: string;
  lead: string;
  type: string;
  title: string;
  createdAt: string | null;
  cover?: Image;
  authors: Array<Member>;
  tags: Array<Tag>;
  stats: { ratings: number; comments: number; views: number };
  contentparts: Array<ChunkProps<Record<string, unknown>>>;
};