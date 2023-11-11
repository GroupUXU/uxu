import type { ReactElement } from 'react';
import { Terms } from 'design-system';
import { searchEngineConfig, footerConfig, headerMenuConfig } from '../config';

function PageTerms (): ReactElement {
  return (
    <Terms
      defaultSuggestions={searchEngineConfig}
      footer={footerConfig}
      headerMenu={headerMenuConfig}
    />
  )
}

export default PageTerms
