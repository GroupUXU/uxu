import {ChunkProps} from "design-system/components/molecules/contentPartDisplay"; // External imports first (assuming this is external)
import {Comment} from "./comment";
import {Image} from "./image";
import {Pagination} from "./pagination";
import {PhoneNetworkPL} from '../../enums';
import {Status} from '../../types';
import {Tag} from "./tag";


export type PhoneFull = {
  comments: { data: Array<Comment>, pagination: Pagination } | null;
  contentParts: Array<ChunkProps<Record<string, unknown>>>;
  cover: Image | null;
  createdAt: string | null;
  format: Array<Tag>;
  gallery: {
    danger: Image;
    default: Image;
    error: Image;
    success: Image;
    warning: Image;
  };
  id: string | null;
  lead: string | null;
  network: PhoneNetworkPL | null;
  phone: string | null;
  reputation: Status | null;
  typ: string | null;
  updatedAt: string | null;
  views: Array<any>;
};
