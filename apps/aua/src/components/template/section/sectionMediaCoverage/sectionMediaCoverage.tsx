import type { ReactElement } from "react";
import { ColorShiftTextAnimator } from "design-system/components/atoms/colorShiftTextAnimator";
import { PressCoverageLinks } from "design-system/components/atoms/pressCoverageLinks";
import { Link } from "design-system/components/atoms/link";
import styles from './sectionMediaCoverage.module.scss';
import { header, description, buttonLeft, buttonRight, coverageLinks } from './consts';

export function SectionMediaCoverage(): ReactElement {
    return (
        <section className={styles.section}>
            <ColorShiftTextAnimator description={description} header={header} />
            <div className={styles.wrapperButtons}>
                <Link className="btn primary large" href="#start" title="Sprawdź możliwy zwrot">{buttonLeft}</Link>
                <Link className="btn special large" href="#analize" title="Jak to działa ?"><span/><span/><span/>{buttonRight}</Link>
            </div>
            <h4 className="headerSection">PISALI O NAS</h4>
            <PressCoverageLinks coverageLinks={coverageLinks} />
        </section>)
}