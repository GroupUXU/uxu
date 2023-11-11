/* eslint-disable  unicorn/filename-case -- we need this page */
import type { ReactElement } from 'react';
import { PrivacyPolicy } from 'design-system';
import { searchEngineConfig, footerConfig, headerMenuConfig } from '../config';

function PagePrivacyPolicy (): ReactElement {
  return (
    <PrivacyPolicy
      defaultSuggestions={searchEngineConfig}
      footer={footerConfig}
      headerMenu={headerMenuConfig}
    />
  )
}

export default PagePrivacyPolicy
