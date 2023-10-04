import type { menuItems } from "../../layoutListingPost/consts";

export type MobileVerticalModalProps = {
  currentSlug: string;
  menuItems: typeof menuItems;
  isLinkActive: (slug: string) => boolean;
};
