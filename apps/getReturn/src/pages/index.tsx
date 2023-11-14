import type { ReactElement } from 'react';
import { CrumbleMenu, LayoutStaticText, useSeoConfig } from 'design-system';
import { footerConfig, headerMenuConfig, searchEngineConfig } from '../config';

function Index(): ReactElement  {
  const seo = useSeoConfig({});

  return (
    <LayoutStaticText
      footer={footerConfig}
      headerMenu={headerMenuConfig}
      searchEngineConfig={searchEngineConfig}
      seo={seo}
      topElement={<CrumbleMenu data={[{ title: "home", href: "/" }]}/>}
    >
      <section style={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <p>Strona w budowie</p>
      </section>
    </LayoutStaticText>
  );
};

export default Index;
