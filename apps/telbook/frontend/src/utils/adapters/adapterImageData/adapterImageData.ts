/* eslint-disable -- Temporarily disabling all rules due to receiving 'any' type from backend, need to refactor once backend provides proper types */
import type { Image } from 'utils';
import type { AdapterSrcImageDataProps, AdapterImageDataProps } from "./types";

export function adapterSrcImageData({ attributes }: AdapterSrcImageDataProps): string | null {
  const { url } = attributes;
  if (url != null) return url;
  return null;
}

export function adapterImageData({ image, typeImg = 'medium'}: AdapterImageDataProps): Image | null {
  if (!image) return null;

  const { caption, alternativeText, formats, url } = image;

  if (!formats) {
    return {
      src: url ? adapterSrcImageData({ attributes: { url } }) : null,
      caption: caption ?? null,
      alt: alternativeText ?? null,
    };
  }

  const src = !formats[typeImg] ? (url ? adapterSrcImageData({ attributes: { url } }) : null) : adapterSrcImageData({ attributes: { url: formats[typeImg].url } });

  return {
    src,
    caption: caption ?? null,
    alt: alternativeText ?? null,
  };
}
