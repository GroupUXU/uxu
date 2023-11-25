import type { ChunkProps } from "design-system/components/molecules/contentPartDisplay";
import { ContentPartEnum } from "design-system/components/molecules/contentPartDisplay";
import { adapterImageData } from "../adapterImageData";
import type { AdapterContentPartProps } from './types';

export function adapterContentPart(content?: AdapterContentPartProps): ChunkProps<Record<string, unknown>> {
  const defaultData: ChunkProps<Record<string, unknown>> = {
    id: "",
    type: ContentPartEnum.EMPTY,
  };

  if (!content) return defaultData;

  switch(content.__typename) {
    case 'ComponentContentPartsTxt':
      return { ...defaultData, id: content.id || "", value: content.txt || "", type: ContentPartEnum.PARAGRAPH };

    case 'ComponentContentPartsYoutube':
      return { ...defaultData, id: content.id || "", url: content.url || "", type: ContentPartEnum.EMBEDYOUTUBE };

    case 'ComponentContentPartsQuote':
      return { ...defaultData, id: content.id || "", value: content.quote || "", type: ContentPartEnum.QUOTE };

    case 'ComponentContentPartsMedia':
      if (content.media.data?.attributes) {
        return {
          ...defaultData,
          id: content.id || "",
          type: ContentPartEnum.IMG,
          src: adapterImageData({image: content.media.data.attributes , typeImg: "medium" })?.src || content.media.data.attributes.url,
          caption: content.media.data.attributes.caption || undefined,
          alternativeText: content.media.data.attributes.alternativeText || undefined,
        };
      } 
        return defaultData;
    default:
      return defaultData;
  }
};