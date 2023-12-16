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
          title: "Wiadomości",
          linkPath: "/"
        },
        {
          id: `${generateUniqueId()}`,
          title: "Usługi",
          linkPath: "/s"
        },
      ]
    },
  ],
};
