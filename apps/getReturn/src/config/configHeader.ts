type HeaderMenuConfigTypes = {
  mobile: {
    menu: Array<{ slug: string, title: string }>
  }
  desktop: {
    menu: Array<{ slug: string, title: string }>
  }
}

export const HEADER_MENU_CONFIG: HeaderMenuConfigTypes = {
    mobile: {
      menu: [
        { slug: "/", title: "Home" },
        { slug: "/blog", title: "Blog" },
        { slug: "/contact", title: "Kontakt" }
      ]
    },
    desktop: {
      menu: [
        { slug: "/", title: "Home" },
        { slug: "/blog", title: "Blog" },
        { slug: "/contact", title: "Kontakt" }
      ]
    }
  }
;
