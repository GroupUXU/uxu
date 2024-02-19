import type { ReactElement } from "react";
import { parseFormatDate, setReputationPL } from "utils";
import styles from "./phoneMetaWrapper.module.scss";
import type { PhoneMetaWrapperProps } from "./types";
import classnames from "classnames";

export function PhoneMetaWrapper({ reputation, createdAt }: PhoneMetaWrapperProps): ReactElement {
		const reputationClass = classnames({
				[styles.success]: reputation === 'positive',
				[styles.default]: reputation === 'inert',
				[styles.warning]: reputation === 'warning',
				[styles.danger]: reputation === 'annoying',
				[styles.error]: reputation === 'negative',
		});
		

		return (
					<div className={styles.wrapperPhoneMeta}>
							<div className={classnames(styles.circle, reputationClass)}></div>
							<div className={styles.wrapperMeta}>
									<div className={styles.reputation}>
											<span className={reputationClass}>{setReputationPL(reputation)}</span>
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
