import type { FooterProps } from "design-system/components/templates/footer/types";

type FooterConfigTypes = {
  footer: {
    mobile: FooterProps;
    desktop: FooterProps;
  }
}

export const FOOTER_CONFIG: FooterConfigTypes = {
  footer: {
    mobile: {
      footerColumns: [],
    },
    desktop: {
      footerColumns: [],
    }
  }
};
