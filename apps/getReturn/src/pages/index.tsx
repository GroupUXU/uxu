import type { ReactElement } from 'react';
import { LayoutStaticText } from 'design-system';
import { useSeoConfig } from 'hooks';
import { footerConfig, headerMenuConfig, searchEngineConfig } from '../config';

function Index(): ReactElement  {
  const seo = useSeoConfig({});

  return (
    <LayoutStaticText
      footer={footerConfig}
      headerMenu={headerMenuConfig}
      searchEngineConfig={searchEngineConfig}
      seo={seo}
    >
      <section style={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <p>Strona w budowie</p>
      </section>
    </LayoutStaticText>
  );
};

export default Index;
