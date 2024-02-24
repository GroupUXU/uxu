import {type ReactElement} from "react";
import {Note} from '../../../../../../atoms/note';
import {CommentAdd, CommentList} from './components';
import style from './comments.module.scss';

export function Comments(): ReactElement {

    return (
        <div className={style.wrapper}>
            <h3>Podziel się wiedzą z innymi</h3>
            <Note typ="warning" fill>
                Nie zachowuj informacji wyłącznie dla siebie. Podziel się swoimi spostrzeżeniami na temat tego rozmówcy,
                aby pomóc innym ustalić, czy numer telefonu jest uznawany za zaufany, czy też nie.
            </Note>
            <CommentAdd/>
            <h3>Komentarze</h3>
            <CommentList
                data={[
                    {
                        createdAt: "Dziś",
                        message: "ok",
                        id: "2",
                        status: "danger"
                    }
                ]}/>
            <h3>Podobne numery</h3>
        </div>
    )
}
