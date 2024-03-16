import { useEffect } from 'react';

export function GoogleAdManagerHead(): null {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
    script.async = true;

    const onScriptLoad = () => console.log('The Google Ad Manager script has completed successfully');
    const onScriptError = (error: unknown) => console.error('Google Ad Manager script failed to load:', error);

    script.addEventListener('load', onScriptLoad);
    script.addEventListener('error', onScriptError);

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      script.removeEventListener('load', onScriptLoad);
      script.removeEventListener('error', onScriptError);
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
