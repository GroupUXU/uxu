/* eslint-disable  unicorn/filename-case -- we need this page */
import type { ReactElement } from 'react';
import { useSiteConfig } from "hooks";
import { PrivacyPolicy } from 'design-system';
import { FOOTER_CONFIG, HEADER_MENU_CONFIG, CONFIG_SEARCH_ENGINE } from '../config';

function PagePrivacyPolicy (): ReactElement {
  const { config} = useSiteConfig ();
  const isMobile = config.client?.platform.isMobile || false;
  return (
    <PrivacyPolicy
      defaultSuggestions={CONFIG_SEARCH_ENGINE}
      footer={isMobile ? FOOTER_CONFIG.footer.mobile : FOOTER_CONFIG.footer.desktop}
      headerMenu={isMobile ? HEADER_MENU_CONFIG.mobile.menu : HEADER_MENU_CONFIG.desktop.menu}
    />
  )
}

export default PagePrivacyPolicy
