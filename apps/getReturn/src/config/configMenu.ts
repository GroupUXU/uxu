import type { BranchProps } from "design-system/components/molecules/tree";

type HeaderMenuConfigTypes = Array<{ href: string, title: string }>

export const headerMenuConfig: HeaderMenuConfigTypes = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
  { href: "/contact", title: "Kontakt" }
]

export const siteBarMenuConfig: Array<BranchProps> = [
  {
    title: "poradniki", href: "/"
  },
  {
    title: "finanse", href: "/"
  },
  {
    title: "biznes", href: "/"
  },
  {
    title: "praca", href: "/"
  },
  {
    title: "podatki", href: "/"
  },
]

