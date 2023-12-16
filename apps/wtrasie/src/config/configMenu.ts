import type { BranchProps } from "design-system/components/molecules/tree";

type HeaderMenuConfigTypes = Array<{ href: string, title: string }>

export const headerMenuConfig: HeaderMenuConfigTypes = [
  {href: "/", title: "Home"},
  {href: "/s", title: "Usługi"},
]

export const siteBarMenuConfig: Array<BranchProps> = [
  {
    title: "Inspiracje", href: "/",
    branches: [
      {
        title: "Doświadczenia", href: "/",
        branches: [
          {title: "Śluby", href: "/"},
          {title: "Parki Narodowe", href: "/"},
          {title: "Przygody", href: "/"},
          {title: "Wycieczki", href: "/"},
          {title: "Podróże Pociągiem", href: "/"},
          {title: "Wyspy i Plaże", href: "/"},
          {title: "Wellness i Spa", href: "/"},
          {title: "Safari", href: "/"},
          {title: "Narty i śnieg", href: "/"}
        ]
      },
      {
        title: "Typ podróży", href: "/",
        branches: [
          {title: "Para", href: "/"},
          {title: "Rodzinna", href: "/"},
          {title: "Samotna", href: "/"},
          {title: "Grupowa", href: "/"}
        ]
      },
      {
        title: "Kultura i jedzenie", href: "/",
        branches: [
          {title: "Jedzenie i Picie", href: "/"},
          {title: "Styl i Kultura", href: "/"}
        ]
      }
    ]
  },
  {
    title: "Miejsca Docelowe", href: "/",
    branches: [
      {title: "Afryka", href: "/"},
      {title: "Azja", href: "/"},
      {title: "Australia", href: "/"},
      {title: "Ameryka Środkowa i Karaiby", href: "/"},
      {
        title: "Europa", href: "/",
        branches: [
          {
            title: "Polska", href: "/",
            branches: [
              {
                title: "Lubuskie", href: "/",
                branches: [
                  {title: "Gorzów Wielkopolski", href: "/"},
                  {title: "Zielona Góra", href: "/"}
                ]
              }
            ]
          }
        ]
      },
      {title: "Bliski Wschód", href: "/"},
      {title: "Ameryka Północna", href: "/"},
      {title: "Ameryka Południowa", href: "/"}
    ]
  },
  {
    title: "Poradniki i Wiadomości", href: "/",
    branches: [
      {title: "Loty", href: "/"}
    ]
  }
]
