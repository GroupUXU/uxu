import type { ReactElement } from 'react';
import { LayoutListingPost, useSeoConfig, useSiteConfig } from 'design-system';
import { defaultSuggestions, FOOTER_CONFIG, HEADER_MENU_CONFIG } from '../config';
import { useSearch } from '../hooks';

function Index(): ReactElement  {
  const onSearchQuery = useSearch();
  const seo = useSeoConfig({});
  const { client} = useSiteConfig();
  const isMobile = client?.platform.isMobile || false;

  return (
    <LayoutListingPost
      footer={isMobile ? FOOTER_CONFIG.footer.mobile : FOOTER_CONFIG.footer.desktop}
      headerMenu={isMobile ? HEADER_MENU_CONFIG.mobile.menu : HEADER_MENU_CONFIG.desktop.menu}
      searchEngine={{ defaultSuggestions, onSearchQuery }}
      seo={seo}
      siteBarLeft={<p>left</p>}
      siteBarRight={<p>right</p>}
    >
      <section style={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <p>Strona w budowie</p>
      </section>
    </LayoutListingPost>
  );
};

export default Index;
