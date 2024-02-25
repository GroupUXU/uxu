import {Member} from "./member";
import {Status} from "./status";

export type Comment = {
  id: string | null;
  message: string | null;
  createdAt: string | null;
  updatedAt?: string | null;
  author?: Member | null;
  status?: Status | null;
  repliedCommentId?: string | null;
}
