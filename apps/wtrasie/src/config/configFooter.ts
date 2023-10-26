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
      footerColumns: [
        {
          header: "Przydatne",
          id: "useful",
          links: [
            {
              id: 'about',
              title: "O nas",
              linkPath: "/"
            },
            {
              id: 'blog',
              title: "Blog",
              linkPath: "/blog"
            },
          ]
        },
        {
          header: "Dla klienta",
          id: "forClient",
          links: [
            {
              id: 'whatItsWork',
              title: "Jak to działa ?",
              linkPath: "/"
            },
            {
              id: 'faq',
              title: "FAQ",
              linkPath: "/"
            },
            {
              id: 'contact',
              title: "Kontakt",
              linkPath: "/"
            }
          ]
        },
        {
          header: "Nasze serwisy",
          id: "ourWebSite",
          links: [
            {
              id: 'uxu',
              title: "uxu.pl",
              linkPath: "https://www.uxu.pl",
            },
            {
              id: 'polskidev',
              title: "polski.dev",
              linkPath: "https://www.polski.dev",
            },
            {
              id: 'wTrasie',
              title: "wtrasie.pl",
              linkPath: "https://www.wtrasie.pl",
            },
          ]
        },
        {
          header: "Informacje prawne",
          id: "lawsInformation",
          links: [
            {
              id: 'statute',
              title: "Regulamin",
              linkPath: "/"
            },
            {
              id: 'privacyPolicy',
              title: "Polityka Prywatności",
              linkPath: "/"
            }
          ]
        }
      ],
    },
    desktop: {
      footerColumns: [
        {
          header: "Przydatne",
          id: "useful",
          links: [
            {
              id: 'about',
              title: "O nas",
              linkPath: "/"
            },
            {
              id: 'blog',
              title: "Blog",
              linkPath: "/blog"
            },
            {
              id: 'faq',
              title: "Faq",
              linkPath: "/"
            },
            {
              id: 'contact',
              title: "Kontakt",
              linkPath: "/"
            }
          ]
        },
        {
          header: "Nasze serwisy",
          id: "ourWebSite",
          links: [
            {
              id: 'uxu',
              title: "uxu.pl",
              linkPath: "https://www.uxu.pl",
            },
            {
              id: 'polskidev',
              title: "polski.dev",
              linkPath: "https://www.polski.dev",
            },
            {
              id: 'wTrasie',
              title: "wtrasie.pl",
              linkPath: "https://www.wtrasie.pl",
            },
          ]
        },
        {
          header: "Informacje prawne",
          id: "lawsInformation",
          links: [
            {
              id: 'statute',
              title: "Regulamin",
              linkPath: "/"
            },
            {
              id: 'privacyPolicy',
              title: "Polityka Prywatności",
              linkPath: "/"
            }
          ]
        }
      ],
    }
  }
};
