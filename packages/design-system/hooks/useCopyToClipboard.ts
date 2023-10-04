import { useState, useCallback } from 'react';

type CopyToClipboardHook = [boolean, () => void];

export const useCopyToClipboard = (text: string): CopyToClipboardHook => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = useCallback(() => {
    if (!isCopied) {
      navigator.clipboard.writeText(text).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      }).catch(() => { /* empty */});
    }
  }, [text, isCopied]);

  return [isCopied, copy];
};
