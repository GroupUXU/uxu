import type { PropsWithChildren, ReactElement } from 'react';
import { useContext } from 'react';
import type { DefaultSeoProps } from 'next-seo';
import { DefaultSeo } from 'next-seo';
import { SiteConfigContext } from 'design-system';
import { SEO_CONFIG_DEFAULT } from '../config';


type SEOProviderProps = PropsWithChildren
export function SEOProvider({ children }: SEOProviderProps): ReactElement {
  const siteConfig = useContext(SiteConfigContext);

  const seoConfig: DefaultSeoProps = SEO_CONFIG_DEFAULT({
    locale: siteConfig.site?.locale,
    url: siteConfig.site?.canonicalUrl,
    title: siteConfig.site?.title,
    description: siteConfig.site?.description,
    defaultCover: siteConfig.site?.defaultCover,
  });

  return (
    <>
      <DefaultSeo {...seoConfig} />
      {children}
    </>
  );
}

