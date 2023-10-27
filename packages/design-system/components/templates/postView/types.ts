
import type { ContentPartProps } from '../../molecules/chunks';
import type { Image, Tag, Member } from 'utils';

export type PostViewData = {
  id: string;
  lead: string;
  type: string;
  title: string;
  createdAt: string | null;
  cover: Image;
  authors: Array<Member>;
  tags: Array<Tag>;
  stats: { ratings: number; comments: number; views: number };
  contentparts: Array<ContentPartProps>;
};

export type PostViewProps = {
  postViewData: PostViewData;
};
