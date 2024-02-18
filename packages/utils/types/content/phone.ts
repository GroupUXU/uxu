import {Image} from "./image";
import {Tag} from "./tag";
import {Comment} from "./comment";
import {Pagination} from "./pagination";
import {PhoneNetworkPL} from '../../enums'
import {InfoTyp} from '../../types'
import {ChunkProps} from "design-system/components/molecules/contentPartDisplay";

export type PhoneFull = {
  id: string;
  phone: string;
  typ: string;
  lead: string | null;
  network: PhoneNetworkPL | null;
  reputation: InfoTyp | null;
  updatedAt: string | null;
  createdAt: string | null;
  cover: Image;
  tags: Array<Tag>;
  contentparts: Array<ChunkProps<Record<string, unknown>>>;
  comments: { data: Array<Comment>, pagination: Pagination } | null
};