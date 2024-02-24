import {type ReactElement} from "react";
import {Textarea, InputRadioDefault} from '../../../../../../../../molecules/inputs';
import style from './commentAdd.module.scss';

export function CommentAdd(): ReactElement {
    return (
        <div className={style.wrapper}>
            <Textarea/>
            <div className={style.wrapperInputRadio}>
                <InputRadioDefault fill typ="success">Pozytywny</InputRadioDefault>
                <InputRadioDefault fill typ="default">Obojetny</InputRadioDefault>
                <InputRadioDefault fill typ="warning">Nieznany</InputRadioDefault>
                <InputRadioDefault fill typ="danger">Irytujący</InputRadioDefault>
                <InputRadioDefault fill typ="error">Negatywny</InputRadioDefault>
            </div>
            <div className={style.wrapperSubmit}>
                <button className="btn primary">Dodaj</button>
            </div>
        </div>
    )
}
