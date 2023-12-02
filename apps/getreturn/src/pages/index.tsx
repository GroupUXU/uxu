import type { ReactElement } from 'react';
import { LayoutFull } from 'design-system/components/layout/layoutFull';
import { useSeoConfig } from 'design-system/hooks/useSeoConfig';
import { footerConfig, headerMenuConfig, searchEngineConfig } from '../config';
import { SectionMediaCoverage } from '../components/template/section/sectionMediaCoverage';

function Index(): ReactElement {
    const seo = useSeoConfig({});

    return (
        <LayoutFull
            footer={footerConfig}
            headerMenu={headerMenuConfig}
            searchEngineConfig={searchEngineConfig}
            seo={seo}
        >
           <SectionMediaCoverage />
        </LayoutFull>
    );
};

export default Index;
