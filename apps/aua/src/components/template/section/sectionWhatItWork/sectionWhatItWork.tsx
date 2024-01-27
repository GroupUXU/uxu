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
                            width={315}
                            height={564}
                            urlVideo="/video/videoForLeadHig.mp4"
                            urlCover="/img/videoForLeadHig.png"
                        />
                    </div>
                </div>
            )}
            <div className={styles.wrapperContent}>
                {dataWhatItWorks.map(item => {
                    return (
                        <SectionWithCircle
                            id={item.id}
                            color={item.color}
                            header={item.header}
                            inCircle={item.inCircle}
                            key={item.id}
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
