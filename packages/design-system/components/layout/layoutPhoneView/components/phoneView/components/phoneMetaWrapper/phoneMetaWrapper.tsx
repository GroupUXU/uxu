import type {ReactElement} from "react";
import {parseFormatDate} from "utils";
import styles from "./phoneMetaWrapper.module.scss";
import type {PhoneMetaWrapperProps} from "./types";
import classnames from "classnames";

export function PhoneMetaWrapper({status, createdAt}: PhoneMetaWrapperProps): ReactElement {
    const reputationClass = classnames({
        [styles.success]: status === 'success',
        [styles.default]: status === 'default',
        [styles.warning]: status === 'warning',
        [styles.danger]: status === 'danger',
        [styles.error]: status === 'error',
    });


    return (
        <div className={styles.wrapperPhoneMeta}>
            <div className={classnames(styles.circle, reputationClass)}></div>
            <div className={styles.wrapperMeta}>
                <div className={styles.reputation}>
                    <span className={reputationClass}>{status}</span>
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
