import { useEffect, type ReactElement } from 'react';

export function GoogleTagManagerBody({ googleTagManagerId }: { googleTagManagerId?: string }): ReactElement | null {
    if (Boolean(!googleTagManagerId)) return null;
    useEffect(() => {
        if (!googleTagManagerId) return;

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`;
        Object.assign(iframe.style, {
            display: 'none',
            visibility: 'hidden',
            width: '0',
            height: '0',
        });
        iframe.title = 'Google Tag Manager No Script';

        document.body.insertBefore(iframe, document.body.firstChild);

        return () => {
            document.body.removeChild(iframe);
        };
    }, [googleTagManagerId]);

    if (!googleTagManagerId) return null;

    return null
}
