import {SearchEngineInModal} from "design-system/components/organisms/searchEngine";
import {searchEngineConfig} from "../../../../config";
import style from './sectionSearch.module.scss';

export function SectionSearch () {

  return (
    <section className={style.section}>
      <h1 data-text="Kto dzwonił?">Kto dzwonił?</h1>
      <SearchEngineInModal
        className={style.search}
        searchEngineConfig={searchEngineConfig}/>
      <h6 data-text="Wyszukaj numer teleofnu">Wyszukaj numer teleofnu</h6>
    </section>
  )
}