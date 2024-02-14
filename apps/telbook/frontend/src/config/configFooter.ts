import type { FooterProps } from "design-system/components/templates/footer/types";
import { generateUniqueId } from "utils";

export const footerConfig: FooterProps = {
  footerColumns: [
    {
      id: `${generateUniqueId()}`,
      header: "Przydatne",
      links: [
        {
          id: `${generateUniqueId()}`,
          title: "Blog",
          linkPath: "/"
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
};
