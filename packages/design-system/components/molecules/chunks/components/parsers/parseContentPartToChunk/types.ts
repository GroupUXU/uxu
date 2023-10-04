import type { ReactElement } from "react";
import type { ChunkComponentWithPropsInObject, ContentPartProps} from "../../../types";

export type ParseContentPartToChunkProps = {
  contentParts: Array<ContentPartProps>;
  children: ({ chunkComponents }: { chunkComponents: ChunkComponentWithPropsInObject[] }) => null | ReactElement | Array<ReactElement>;
};
