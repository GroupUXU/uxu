import type { Image, Member } from "utils";

export type PostListData = {
  id: string;
  title: string;
  slug: string;
  cover: Image;
  authors: Array<Member>;
}



export type PostListProps = PostListData