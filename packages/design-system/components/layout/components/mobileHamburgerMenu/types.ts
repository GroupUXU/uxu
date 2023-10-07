export type MobileVerticalModalProps = {
  currentSlug: string;
  headerMenu: Array<{ slug: string, title: string }>;
  isLinkActive: (slug: string) => boolean;
};
