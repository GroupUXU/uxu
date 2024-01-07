import type {ReactElement} from "react";
import type {BoxProps} from "./types";
import styles from './box.module.scss';
import {vectorBrands} from 'assets';
import {Link} from 'design-system/components/atoms/link'

export function Box({children, info}: BoxProps): ReactElement {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperDashBoard}>
                <div className={styles.wrapperForBrand}>
                    <div className={styles.main}>{vectorBrands.wTrasie}</div>
                    <div className={styles.secound}><p>power by</p> {vectorBrands.uxu}</div>
                </div>
                {children}
            </div>
            {info ? <span className={styles.info}>
            Przesyłając ten formularz, potwierdzam, że przeczytałem i zrozumiałem <Link href="/privacy-policy"
                                                                                        title="Polityka prywatności">politykę prywatności</Link> oraz <Link
                href="/privacy-policy" title="Regulamin">Regulamin</Link>
          </span> : <div className={styles.wrapperLinks}>
                <Link title="regulamin" href="/">Regulamin</Link>
                <Link title="polityka prywatności" href="/">Polityka prywatności</Link>
            </div>}


        </div>
    )
}