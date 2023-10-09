import type { ReactElement } from 'react';
import { LayoutListingPost, useSeoConfig, useSiteConfig } from 'design-system';
import { FOOTER_CONFIG, HEADER_MENU_CONFIG, SEARCH_ENGINE_CONFIG_IN_MODAL } from '../config';

function Index(): ReactElement  {
  const seo = useSeoConfig({});
  const { client} = useSiteConfig();
  const isMobile = client?.platform.isMobile || false;

  return (
    <LayoutListingPost
      footer={isMobile ? FOOTER_CONFIG.footer.mobile : FOOTER_CONFIG.footer.desktop}
      headerMenu={isMobile ? HEADER_MENU_CONFIG.mobile.menu : HEADER_MENU_CONFIG.desktop.menu}
      searchEngineConfig={SEARCH_ENGINE_CONFIG_IN_MODAL}
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
