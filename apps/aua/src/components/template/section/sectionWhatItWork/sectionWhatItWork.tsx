import type {ReactElement} from "react";
import {SectionWithCircle} from "design-system/components/templates/section/sectionWithCircle";
import {PlayerAutoMuteReplay} from 'design-system/components/atoms/player';
import {SectionCustomerFaq} from "../sectionCustomerFaq";
import {dataWhatItWorks} from "./consts";
import styles from './sectionWhatItWork.module.scss';
import {useSiteConfig} from "design-system/hooks/useSiteConfig";

export function SectionWhatItWork(): ReactElement {
    const {config: {client: {platform: {isDesktop}}}} = useSiteConfig();

    return (
        <div className={styles.wrapper}>
            {isDesktop && (
                <div className={styles.railVideo}>
                    <div className={styles.wrapperVideo}>
                        <PlayerAutoMuteReplay
                            width={406}
                            height={720}
                            urlVideo="/video/test.mp4"
                            urlCover="/img/tutorialCover.png"
                        />
                    </div>
                </div>
            )}
            <div className={styles.wrapperContent}>
                {dataWhatItWorks.map(item => {
                    return (
                        <SectionWithCircle
                            color={item.color}
                            header={item.header}
                            inCircle={item.inCircle}
                            key={item.header}
                        >
                            <div className={styles.wrapperFaq}>
                                <SectionCustomerFaq
                                    collapse={item.sectionCustomerFaqData.collapse}
                                    description={item.sectionCustomerFaqData.description}
                                    header={item.sectionCustomerFaqData.header}
                                />
                            </div>
                        </SectionWithCircle>
                    )
                })}
            </div>
        </div>
    )
}