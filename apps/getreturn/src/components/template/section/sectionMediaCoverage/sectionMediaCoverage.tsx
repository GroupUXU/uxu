import { ColorShiftTextAnimator } from "design-system/components/atoms/colorShiftTextAnimator";
import { PressCoverageLinks } from "design-system/components/atoms/pressCoverageLinks";
import { Link } from "design-system/components/atoms/link";
import styles from './sectionMediaCoverage.module.scss';
import { header, description, buttonLeft, buttonRight, coverageLinks } from './consts';

export function SectionMediaCoverage() {
    return (
        <section className={styles.section}>
            <ColorShiftTextAnimator header={header} description={description}/>
            <div className={styles.wrapperButtons}>
                <Link className="btn primary large" href="#" title="Sprawdź możliwy zwrot">{buttonLeft}</Link>
                <Link className="btn special large" href="#" title="Jak to działa ?"><span/><span/><span/>{buttonRight}</Link>
            </div>
            <h4 className={styles.headerPressCoverageLinks}>PISALI O NAS</h4>
            <PressCoverageLinks coverageLinks={coverageLinks} />
        </section>)
}