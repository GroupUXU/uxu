import {Member} from "./member";
import {InfoTyp} from "./infoTyp";

export type Comment = {
  id: string;
  message: string;
  createdAt: string | null;
  updatedAt: string | null;
  author: Member | null;
  reputation: InfoTyp;
  repliedCommentId?: string;
}