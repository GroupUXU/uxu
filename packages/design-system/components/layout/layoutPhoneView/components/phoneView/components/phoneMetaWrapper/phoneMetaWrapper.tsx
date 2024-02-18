import type { ReactElement } from "react";
import { parseFormatDate, setReputation } from "utils";
import type { ReputationTyp } from 'utils';
import styles from "./phoneMetaWrapper.module.scss";
import type { PhoneMetaWrapperProps } from "./types";
import classnames from "classnames";

function setReputationPolishName(reputationEn: ReputationTyp): string {
		switch (reputationEn) {
				case "positive":
						return "Pozytywny";
				case "inert":
						return "Obojętny";
				case "annoying":
						return "Irytujący";
				case "negative":
						return "Negatywny";
				case "warning":
				default:
						return "Nieznany";
		}
}

export function PhoneMetaWrapper({ reputation, createdAt }: PhoneMetaWrapperProps): ReactElement {
		const reputationClass = classnames({
				[styles.success]: reputation === 'success',
				[styles.default]: reputation === 'default',
				[styles.warning]: reputation === 'warning',
				[styles.danger]: reputation === 'danger',
				[styles.error]: reputation === 'error',
		});
		
		return (
					<div className={styles.wrapperPhoneMeta}>
							<div className={classnames(styles.circle, reputationClass)}></div>
							<div className={styles.wrapperMeta}>
									<div className={styles.reputation}>
											<span className={reputationClass}>{setReputationPolishName(setReputation(reputation))}</span>
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
