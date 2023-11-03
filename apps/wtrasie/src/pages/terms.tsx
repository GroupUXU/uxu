import type { ReactElement } from 'react';
import { Terms } from 'design-system';
import { useSiteConfig } from "hooks";
import { FOOTER_CONFIG, HEADER_MENU_CONFIG, CONFIG_SEARCH_ENGINE } from '../config';

function PageTerms (): ReactElement {
  const { config} = useSiteConfig ();
  const isMobile = config.client?.platform.isMobile || false;
  return (
    <Terms
      defaultSuggestions={CONFIG_SEARCH_ENGINE}
      footer={isMobile ? FOOTER_CONFIG.footer.mobile : FOOTER_CONFIG.footer.desktop}
      headerMenu={isMobile ? HEADER_MENU_CONFIG.mobile.menu : HEADER_MENU_CONFIG.desktop.menu}
    />
  )
}

export default PageTerms
