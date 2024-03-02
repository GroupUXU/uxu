import type {ReactElement} from "react";
import {parseFormatDate, statusMapToPL} from "utils";
import styles from "./phoneMetaWrapper.module.scss";
import type {PhoneMetaWrapperProps} from "./types";
import classnames from "classnames";

export function PhoneMetaWrapper({status, createdAt}: PhoneMetaWrapperProps): ReactElement | null {
    if (!status || !createdAt) return null


    return (
        <div className={styles.wrapperPhoneMeta}>
            <div className={classnames(styles.circle, styles[status])}></div>
            <div className={styles.wrapperMeta}>
                <div className={styles.reputation}>
                    <span className={styles[status]}>{statusMapToPL(status)}</span>
                </div>
                {createdAt && (
                    <div className={styles.wrapperPublicationDate}>
                        <span>{parseFormatDate(createdAt)}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
