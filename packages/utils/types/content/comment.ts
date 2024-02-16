import {Member} from "./member";

export type Comment = {
  id: string;
  message: string;
  createdAt: string | null;
  author?: Member;
  repliedCommentId?: string
}