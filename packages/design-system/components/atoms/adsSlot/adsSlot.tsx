/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/dot-notation, @typescript-eslint/no-unnecessary-condition -- he reason for this is that it interacts with the 'window.googletag' property */
import type { CSSProperties, ReactElement } from 'react';
import { useEffect } from "react";
import { checkIsDOM } from "utils";
import type { AdSlotData } from "utils";
import { useSiteConfig } from "../../../hooks/useSiteConfig";
import type { AdsProps } from './types';
import styles from './adsSlot.module.scss';

export function AdsSlot ({ slot, stickyOffset, style, className }: AdsProps ): ReactElement | null {
  const {config: {marketingToolsConfig: {adSlotsMap, googleAdManagerId}}} = useSiteConfig ();
  const dataSlot: AdSlotData | undefined = adSlotsMap?.get ( slot );
  const isDataSlot = Boolean ( dataSlot );
  const id = `uxu-${slot}`;

  useEffect ( (): void => {
    function initializeGTM (): void {
        window['googletag'] = window['googletag'] || {cmd: []};
        window['googletag'].cmd.push ( (): void => {
          const slotCode = `/${googleAdManagerId}/${dataSlot?.code}`;
          const slotSize = [dataSlot?.size.width, dataSlot?.size.height];
          window['googletag'].defineSlot ( slotCode, slotSize, id ).addService ( window['googletag'].pubads () );
          window['googletag'].pubads ().enableSingleRequest ();
          window['googletag'].enableServices ();
          window['googletag'].cmd.push ( () => window['googletag'].display ( id ) );
        });
    };

    isDataSlot && checkIsDOM(initializeGTM);
  }, [slot, id, googleAdManagerId, dataSlot, isDataSlot] );

  if ( !isDataSlot ) return null;

  const adStyle: CSSProperties = {maxWidth: '100%', overflow: 'hidden', width: `${dataSlot?.size.width}px`, height: `${dataSlot?.size.height}px`, ...style};
  const containerStyle: CSSProperties = stickyOffset ? {...adStyle, position: 'sticky', top: stickyOffset} : adStyle;

  return (
    <div className={className} style={containerStyle}>
      <div className={styles.wrapper} style={adStyle}>
        <div className={styles.ad} id={id} style={adStyle}/>
      </div>
    </div>
  );
}
