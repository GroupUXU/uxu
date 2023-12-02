import { ReactElement } from "react";
import { Link } from '../link'
import classnames from 'classnames';
import { PressCoverageLinksProps } from './types';
import styles from './pressCoverageLinks.module.scss';

export function PressCoverageLinks({ coverageLinks }: PressCoverageLinksProps): ReactElement {

    return (
        <div className={styles.wrapper}>
        <ul className={styles.list}>
            {coverageLinks.map(({ logoSvg, url, companyName }) => (
                <li key={companyName}><Link title={companyName} href={url}>{logoSvg}<div className={classnames('btn large', styles.button)}>zobacz artykuł</div></Link></li>
            ))}
        </ul>
            <p>Kliknij na logo aby przeczytac arykuł</p>
        </div>
    )
}