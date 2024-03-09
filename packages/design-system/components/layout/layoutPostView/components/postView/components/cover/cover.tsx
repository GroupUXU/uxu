/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import type {ReactElement} from "react";
import Image from "next/image";
import {DummyImg} from "../../../../../../atoms/dummyIMG";
import styles from "./cover.module.scss";
import type {CoverProps} from './types';
import {useSiteConfig} from "../../../../../../../hooks/useSiteConfig";

export function Cover({cover, title}: CoverProps): ReactElement {
    const {config: {client: {platform: {isMobile}}}} = useSiteConfig();
    const {src, alt = title, caption} = cover || {};

    return (
        <div className={styles.wrapperCoverWithMeta}>
            <div className={styles.wrapperImg}>
                {src ? (
                    <Image
                        alt={alt || title}
                        height={isMobile ? 500 : 800}
                        loading="eager"
                        priority
                        sizes="(max-width: 600px) 100vw, 50vw"
                        src={src}
                        width={isMobile ? 1024 : 1408}
                    />
                ) : (
                    <DummyImg height="60rem" width="100%"/>
                )}
            </div>
            {caption && <span>Źródło: {caption}</span>}
        </div>
    );
}
