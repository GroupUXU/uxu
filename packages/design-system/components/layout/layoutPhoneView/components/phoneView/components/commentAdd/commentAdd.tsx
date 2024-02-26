import {type ReactElement} from "react";
import {Textarea, InputRadioDefault} from '../../../../../../molecules/inputs';
import style from './commentAdd.module.scss';
import {useForm} from "react-hook-form";
import type {CommentAddFormInputsProps} from "./types";
import type {ContactFormInputsProps} from "../../../../../../../pages/contact/types";

export function CommentAdd(): ReactElement {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<CommentAddFormInputsProps>();

    const handleFormSubmit = (data: ContactFormInputsProps) => {
        console.log(data);
    };

    return (
        <form className={style.wrapper} onSubmit={handleSubmit(handleFormSubmit)}>

            <Textarea {...register('message', {
                minLength: {
                    value: 10,
                    message: "Twój komentarz musi zawierać przynajmniej 10 znaków",
                }
            })} errorMessage={errors.message?.message} placeholder="Opisz swój problem"/>
            <div className={style.wrapperInputRadio}>
                <InputRadioDefault
                    {...register('status')}  // Rejestracja pola input typu radio
                    typ="success">Pozytywny</InputRadioDefault>
                <InputRadioDefault
                    {...register('status')}  // Rejestracja pola input typu radio
                    typ="default">Obojetny</InputRadioDefault>
                <InputRadioDefault
                    {...register('status')}  // Rejestracja pola input typu radio
                    typ="warning">Nieznany</InputRadioDefault>
                <InputRadioDefault
                    {...register('status')}  // Rejestracja pola input typu radio
                    typ="danger">Irytujący</InputRadioDefault>
                <InputRadioDefault
                    {...register('status')}  // Rejestracja pola input typu radio
                    typ="error">Negatywny</InputRadioDefault>
            </div>
            <div className={style.wrapperSubmit}>
                <button className="btn primary">Dodaj</button>
            </div>
        </form>
    )
}
