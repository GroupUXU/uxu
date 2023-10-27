import type { ComponentType } from "react";
import type { IconProps } from "react-feather";

export type SocialLinkData = {
  name: string,
  accountId?: string,
  url: string,
  Icon: ComponentType<IconProps>
}