import type { Image } from 'design-system';
import type { AdapterSrcImageDataProps, Format, AdapterImageDataProps } from "./types";

export function adapterSrcImageData({ attributes, typeImg }: AdapterSrcImageDataProps): string | null {
  const { formats, url } = attributes || {};

  if (!formats && !url) return null;
  const formatUrl = formats ? (formats[typeImg] as Format).url : url;
  return formatUrl || null;
}

export function adapterImageData({ image, typeImg = 'medium'}: AdapterImageDataProps): Image {
  if (!image) return null;

  const { caption, alternativeText, formats, url } = image;
  const src = adapterSrcImageData({ attributes: formats ?? { url }, typeImg });

  return {
    src,
    caption: caption ?? undefined,
    alt: alternativeText ?? undefined,
  };
}
