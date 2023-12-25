import type {ReactElement} from "react";
import {SectionWithCircle} from "design-system/components/templates/section/sectionWithCircle";
import {dataWhatItWorks} from "./consts";
import {SectionCustomerFaq} from "../sectionCustomerFaq";
import styles from './sectionWhatItWork.module.scss';

export function SectionWhatItWork(): ReactElement {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperVideo}>
                <video
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    src="/video/test.mp4"
                    style={{position: 'sticky', top: "8rem"}}
                    width="350px"
                >
                    <track default kind="captions" label="polish" src="/video/test.mp4" srcLang="pl"/>
                </video>
            </div>
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