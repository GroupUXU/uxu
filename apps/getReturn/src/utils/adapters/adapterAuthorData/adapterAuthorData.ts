import type { Member } from "design-system";
import { adapterImageData } from "../adapterImageData";
import type { AdapterAuthorDataProps } from "./types";

export function adapterAuthorData(author?: AdapterAuthorDataProps): Member {
  return ({
    id: author?.id || "",
    title: author?.attributes?.username || "",
    avatar: adapterImageData ( {image: author?.attributes?.avatar?.data?.attributes, typeImg: 'thumbnail'} ),
  });
}