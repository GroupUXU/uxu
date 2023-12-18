import type { BranchProps } from "design-system/components/molecules/tree";

type HeaderMenuConfigTypes = Array<{ href: string, title: string }>

export const headerMenuConfig: HeaderMenuConfigTypes = [
  {href: "/", title: "Home"},
  {href: "/s", title: "Usługi"},
  {href: "/contact", title: "Kontakt"}
]

export const siteBarMenuConfig: Array<BranchProps> = [
  {
    title: "Wiadomości", href: "/",
  },
  {
    title: "Usługi", href: "/s",
  },
]
