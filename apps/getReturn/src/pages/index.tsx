import type { ReactElement } from 'react';
import { LayoutListingPost } from 'design-system';
import {  useSeoConfig, useSiteConfig } from 'hooks';
import { FOOTER_CONFIG, HEADER_MENU_CONFIG, CONFIG_SEARCH_ENGINE } from '../config';

function Index(): ReactElement  {
  const seo = useSeoConfig({});
  const { client} = useSiteConfig();
  const isMobile = client?.platform.isMobile || false;

  return (
    <LayoutListingPost
      footer={isMobile ? FOOTER_CONFIG.footer.mobile : FOOTER_CONFIG.footer.desktop}
      headerMenu={isMobile ? HEADER_MENU_CONFIG.mobile.menu : HEADER_MENU_CONFIG.desktop.menu}
      searchEngineConfig={CONFIG_SEARCH_ENGINE}
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
