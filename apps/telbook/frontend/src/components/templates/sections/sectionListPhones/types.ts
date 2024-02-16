import {NoteType} from 'design-system/components/atoms/note/types';
import type { Comment } from 'utils';


export type SectionListCommentsPhonesProps = {
  comments: Array<Comment & { type: NoteType, phone?: string }>
}