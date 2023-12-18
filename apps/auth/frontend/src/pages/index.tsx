import type { ReactElement } from 'react';
import { LayoutListingPost } from 'design-system/components/layout/layoutListingPost/layoutListingPost';
import { useSeoConfig } from 'design-system/hooks/useSeoConfig';
import { useSiteConfig } from "design-system/hooks/useSiteConfig";
import { footerConfig, headerMenuConfig, searchEngineConfig } from '../config';

function Index (): ReactElement {
  const { config } = useSiteConfig();
  const isMobile = config.client.platform.isMobile;
  const seo = useSeoConfig ( {} );


  return (
    <LayoutListingPost
      footer={footerConfig}
      headerMenu={headerMenuConfig}
      searchEngineConfig={searchEngineConfig}
      seo={seo}
    >
    <p>login</p>
    </LayoutListingPost>
  );
};

export default Index;
