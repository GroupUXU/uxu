/* eslint-disable react/jsx-sort-props -- I don't have time for fix this problem */
import type { ReactElement } from "react";
import { Facebook, Twitter, Link } from 'react-feather';
import { useSiteConfig, useCopyToClipboard } from "hooks";
import styles from "./buttonsSocialShare.module.scss";

type ShareType = 'facebook' | 'twitter';

export function ButtonsSocialShare (): ReactElement {
  const {config: {site}} = useSiteConfig ();
  const canonicalURL = site?.canonicalUrl || "";
  const [copyStatus, copyToClipboard] = useCopyToClipboard ( canonicalURL );

  const shareCanonicalURL = ( type: ShareType ): void => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${canonicalURL}`,
      twitter: `https://twitter.com/intent/tweet?url=${canonicalURL}`,
    };
    window.open ( urls[ type ], '_blank' );
  };

  return (
    <div className={styles.wrapper} aria-live="assertive" aria-atomic="true">
      <button
        aria-label="Share on Facebook"
        className={styles.btn}
        onClick={() => {
          shareCanonicalURL ( 'facebook' );
        }}
        type="button"
      >
        <span>Udostępnij</span>
        <Facebook/>
      </button>
      <button
        aria-label="Share on Twitter"
        className={styles.btn}
        onClick={() => {
          shareCanonicalURL ( 'twitter' );
        }}
        type="button"
      >
        <Twitter/>
      </button>
      <button
        aria-label="Copy link"
        className={styles.btn}
        onClick={copyToClipboard}
        type="button"
      >
        <Link/>
        <span>{copyStatus ? "Skopiowano link!" : "Kopiuj link"}</span>
      </button>
    </div>
  );
}
