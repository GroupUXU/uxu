import type { FC } from 'react';
import type { ContentPartEnum } from './enums';

export type ContentPartProps = {
  id: string;
  type: ContentPartEnum;
  value?: string;
  url?: string;
  src?: string;
  caption?: string;
  alternativeText?: string;
};

export type ChunkComponent = FC<ContentPartProps> | null;

export type ChunkComponentWithPropsInObject = {
  props: ContentPartProps;
  ChunkComponent: ChunkComponent;
};
