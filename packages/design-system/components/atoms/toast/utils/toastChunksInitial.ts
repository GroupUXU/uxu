import type { ToastChunks, ToastChunk } from "utils";

export function toastChunksInitial(toastChunks: Array<ToastChunk & { shouldBeIncluded: boolean }>): ToastChunks {
  return toastChunks
    .filter((toastChunk: ToastChunk & { shouldBeIncluded: boolean }) => toastChunk.shouldBeIncluded)
    .map(({ id, props, delay }) => ({ id, props, delay }));
}