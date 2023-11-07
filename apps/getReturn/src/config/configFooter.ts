import type { FooterProps } from "design-system/components/templates/footer/types";
import { generateUniqueId } from "utils";

type FooterConfigTypes = {
  footer: {
    mobile: FooterProps;
    desktop: FooterProps;
  }
}

export const FOOTER_CONFIG: FooterConfigTypes = {
  footer: {
    mobile: {
      footerColumns: [
        {
          id: `${generateUniqueId()}`,
          header: "Przydatne",
          links: [
            {
              id: `${generateUniqueId()}`,
              title: "Blog",
              linkPath: "/blog"
            },
            {
              id: `${generateUniqueId()}`,
              title: "Kontakt",
              linkPath: "/contact"
            },
          ]
        },
        {
          id: `${generateUniqueId()}`,
          header: "Nasze serwisy",
          links: [
            {
              id: `${generateUniqueId()}`,
              title: "uxu.pl",
              linkPath: "https://www.uxu.pl",
            },
            {
              id: `${generateUniqueId()}`,
              title: "polski.dev",
              linkPath: "https://www.polski.dev",
            },
            {
              id: `${generateUniqueId()}`,
              title: "wtrasie.pl",
              linkPath: "https://www.wtrasie.pl",
            },
          ]
        },
        {
          id: `${generateUniqueId()}`,
          header: "Informacje prawne",
          links: [
            {
              id: `${generateUniqueId()}`,
              title: "Regulamin",
              linkPath: "/terms"
            },
            {
              id: `${generateUniqueId()}`,
              title: "Polityka Prywatności",
              linkPath: "/privacy-policy"
            }
          ]
        }
      ],
    },
    desktop: {
      footerColumns: [
        {
          id: `${generateUniqueId()}`,
          header: "Przydatne",
          links: [
            {
              id: `${generateUniqueId()}`,
              title: "Blog",
              linkPath: "/blog"
            },
            {
              id: `${generateUniqueId()}`,
              title: "Kontakt",
              linkPath: "/contact"
            },
          ]
        },
        {
          id: `${generateUniqueId()}`,
          header: "Nasze serwisy",
          links: [
            {
              id: `${generateUniqueId()}`,
              title: "uxu.pl",
              linkPath: "https://www.uxu.pl",
            },
            {
              id: `${generateUniqueId()}`,
              title: "polski.dev",
              linkPath: "https://www.polski.dev",
            },
            {
              id: `${generateUniqueId()}`,
              title: "wtrasie.pl",
              linkPath: "https://www.wtrasie.pl",
            },
          ]
        },
        {
          id: `${generateUniqueId()}`,
          header: "Informacje prawne",
          links: [
            {
              id: `${generateUniqueId()}`,
              title: "Regulamin",
              linkPath: "/terms"
            },
            {
              id: `${generateUniqueId()}`,
              title: "Polityka Prywatności",
              linkPath: "/privacy-policy"
            }
          ]
        }
      ],
    }
  }
};
