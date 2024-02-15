import type { BranchProps } from "design-system/components/molecules/tree";

type HeaderMenuConfigTypes = Array<{ href: string, title: string }>

export const headerMenuConfig: HeaderMenuConfigTypes = [
  {href: "/", title: "Home"},
  {href: "/b", title: "Blog"},
  {href: "/contact", title: "Kontakt"}
]

export const siteBarMenuConfig: Array<BranchProps> = [
  {
    title: "Wiadomości", href: "/t/1/wiadomosci",
  },
  {
    title: "Poradniki", href: "/t/2/poradniki",
  },
]
