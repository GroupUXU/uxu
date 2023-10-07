import type { FC } from 'react';
import type { ContentPartEnum } from './enums';

export type ContentPartProps = {
  id: string;
  type: ContentPartEnum;
  value?: string;
  url?: string | null;
  src?: string | null;
  caption?: string | null;
  alternativeText?: string | null;
};

export type ChunkComponent = FC<ContentPartProps> | null;

export type ChunkComponentWithPropsInObject = {
  props: ContentPartProps;
  ChunkComponent: ChunkComponent;
};
