import {Member} from "./member";
import {Status} from "./status";

export type Comment = {
  id: string;
  message: string;
  createdAt: string | null;
  updatedAt?: string | null;
  author?: Member | null;
  status?: Status;
  repliedCommentId?: string;
}
