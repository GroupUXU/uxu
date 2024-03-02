import type {ReactElement} from "react";
import style from './sectionEmpty.module.scss';
import {SectionEmptyProps} from "./types";

export function SectionEmpty({children}: SectionEmptyProps): ReactElement {
  
  return (
     <section className={style.section}>
       {children}
     </section>
  )
}