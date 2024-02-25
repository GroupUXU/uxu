import {ChunkProps} from "design-system/components/molecules/contentPartDisplay";
import {Comment} from "./comment";
import {Image} from "./image";
import {Pagination} from "./pagination";
import {Status} from '../../types';
import {Tag} from "./tag";


export type PhoneFull = {
  comments: { data: Array<Comment>, pagination: Pagination } | null;
  contentParts: Array<ChunkProps<Record<string, unknown>>>;
  cover: Image | null;
  createdAt: string | null;
  format: Array<Tag>;
  id: string | null;
  lead: string | null;
  phone: string | null;
  status: Status | null;
  typ: string | null;
  updatedAt: string | null;
};
