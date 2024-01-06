import type { ReactElement } from 'react';
import { LayoutListingPost } from 'design-system/components/layout/layoutListingPost/layoutListingPost';
import { useSeoConfig } from 'design-system/hooks/useSeoConfig';
import { footerConfig, headerMenuConfig, searchEngineConfig } from '../config';

function Index (): ReactElement {
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
