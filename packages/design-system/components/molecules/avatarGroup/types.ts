import type { Member } from "utils";
import type { Size } from "../../atoms/avatar/types";

export type AvatarGroupProps  = {
  members: Array<Member>;
  className?: string;
} & Size
