type LinkData = {
  id: string;
  title: string
  linkPath: string;
  rel?: string;
  target?: string;
};

type ColumnData = {
  id: string;
  header: string;
  links: Array<LinkData>;
};

export type FooterProps = {
  footerColumns: Array<ColumnData>;
};
