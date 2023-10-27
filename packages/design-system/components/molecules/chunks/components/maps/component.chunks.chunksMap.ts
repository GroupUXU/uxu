import type { FC } from 'react';
import { CodeChunk, EmbedChunk, EmbedYouTubeChunk, GalleryChunk, HeaderChunk, IMGChunk, ListChunk, ParagraphChunk, QuoteChunk, TableChunk } from '../contents';
import { ContentPartEnum } from '../../enums';

export const chunksMap = new Map<ContentPartEnum, FC>([
  [ContentPartEnum.PARAGRAPH, ParagraphChunk],
  [ContentPartEnum.HEADER, HeaderChunk],
  [ContentPartEnum.IMG, IMGChunk],
  [ContentPartEnum.QUOTE, QuoteChunk],
  [ContentPartEnum.LIST, ListChunk],
  [ContentPartEnum.CODE, CodeChunk],
  [ContentPartEnum.EMBED, EmbedChunk],
  [ContentPartEnum.TABLE, TableChunk],
  [ContentPartEnum.GALLERY, GalleryChunk],
  [ContentPartEnum.EMBEDYOUTUBE, EmbedYouTubeChunk],
]);
