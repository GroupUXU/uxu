import type { PropsWithChildren, ReactElement } from 'react';
import type { DefaultSeoProps } from 'next-seo';
import { DefaultSeo } from 'next-seo';
import { SiteConfig } from "utils";


type SEOProviderProps = PropsWithChildren<{ siteConfig: SiteConfig }>
export function SEOProvider({ children, siteConfig }: SEOProviderProps): ReactElement {

  const seoConfig: DefaultSeoProps = {
    openGraph: {
      url: siteConfig?.site?.canonicalUrl,
      title: siteConfig?.site?.title,
      description:  siteConfig?.site?.description,
      type: 'website',
      locale: siteConfig?.site?.locale,
      images: siteConfig?.site?.images,
    },
    title: siteConfig?.site?.title,
    description: siteConfig?.site?.description,
  }

  return (
    <>
      <DefaultSeo {...seoConfig} />
      {children}
    </>
  );
}

