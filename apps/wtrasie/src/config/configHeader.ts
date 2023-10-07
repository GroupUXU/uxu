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
        { slug: "/", title: "Wiadomości" },
        { slug: "/s", title: "Usługi" }
      ]
    },
    desktop: {
      menu: [
        { slug: "/", title: "Wiadomości" },
        { slug: "/s", title: "Usługi" }
      ]
    }
  }
;
