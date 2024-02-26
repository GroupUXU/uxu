import type { PhoneFull , Comment} from 'utils';

export type PhoneViewProps = {
  phoneData: PhoneFull;
  comments: Array<Comment>;
  addComment?: () => void;
  loadMoreComments?: () => void;
};
