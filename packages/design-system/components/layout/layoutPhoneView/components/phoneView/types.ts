import type { PhoneFull , Comment, InfiniteScroll} from 'utils';

export type PhoneViewProps = {
  phoneData: PhoneFull;
  comments: Array<Comment>;
  onCommentAdd: (data: Partial<Comment>) => Promise<boolean>;
  infiniteScrollMoreComments: InfiniteScroll;
};
