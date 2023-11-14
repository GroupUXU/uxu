import { useSiteConfig } from "./useSiteConfig";

type UseSeoConfigProps = {
  title?: string,
  description?: string,
  type?: 'website',
  locale?: string,
  images?: Array<{ url?: string | null }>,
  url?: string
}

export function useSeoConfig ( {title, description, type = 'website', locale, images, url}: UseSeoConfigProps ): {
  openGraph: {
    url: string,
    title: string,
    description: string,
    type: 'website',
    locale: string,
    images: Array<{ url: string }>,
  },
  title: string,
  description: string,
} {
  const {config: { site }} = useSiteConfig ();

  const defaultUrl = site?.canonicalUrl || '';
  const defaultTitle = site?.title || '';
  const defaultDescription = site?.description || '';
  const defaultLocale = site?.locale || 'en';
  const defaultImages = site?.images || [];

  const validImages = (images || defaultImages).filter ( image => typeof image.url === 'string' ) as { url: string }[];
  return {
    openGraph: {
      url: url || defaultUrl,
      title: title || defaultTitle,
      description: description || defaultDescription,
      type,
      locale: locale || defaultLocale,
      images: validImages,
    },
    title: title || defaultTitle,
    description: description || defaultDescription,
  };
}
