import type { BranchProps } from "design-system/components/molecules/tree";

type HeaderMenuConfigTypes = Array<{ href: string, title: string }>

export const headerMenuConfig: HeaderMenuConfigTypes = [
  {href: "/", title: "Home"},
  {href: "/b", title: "Blog"},
  {href: "/contact", title: "Kontakt"}
]

export const siteBarMenuConfig: Array<BranchProps> = [
  {
    title: "Wzorce projektowe", href: "/t/wzorce-projektowe",
  },
  {
    title: "Zagadki", href: "/t/zagadki",
  },
  {
    title: "tutoriale", href: "/t/tutoriale",
  },
]
