export type MobileVerticalModalProps = {
  activeHref: string;
  headerMenu: Array<{ href: string, title: string }>;
  isLinkActive: (slug: string) => boolean;
};
