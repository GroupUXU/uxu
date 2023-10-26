import { ComponentType } from "react";
import { IconProps } from "react-feather";

export type SocialLinkData = {
  name: string,
  accountId?: string,
  url: string,
  Icon: ComponentType<IconProps>
}