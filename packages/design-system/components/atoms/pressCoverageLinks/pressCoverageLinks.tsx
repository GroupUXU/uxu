import type { ReactElement } from "react";
import classnames from 'classnames';
import { Link } from '../link'
import type { PressCoverageLinksProps } from './types';
import styles from './pressCoverageLinks.module.scss';

export function PressCoverageLinks({ coverageLinks }: PressCoverageLinksProps): ReactElement {

    return (
        <div className={styles.wrapper}>
        <ul className={styles.list}>
            {coverageLinks.map(({ logoSvg, url, companyName }) => (
                <li key={companyName}><Link href={url} title={companyName}>{logoSvg}<div className={classnames('btn large', styles.button)}>zobacz artykuł</div></Link></li>
            ))}
        </ul>
            <p>Kliknij na logo aby przeczytac arykuł</p>
        </div>
    )
}