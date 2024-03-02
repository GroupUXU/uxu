import {ReactElement, useState} from "react";
import {type Comment, statusMapFromPL} from "utils";
import {Textarea, InputRadioDefault} from '../../../../../../molecules/inputs';
import {Note} from '../../../../../../atoms/note';
import style from './commentAdd.module.scss';
import {useForm} from "react-hook-form";
import {CommentAddProps} from "./types";
import {LoadingWheel} from "../../../../../../atoms/loading";

export function CommentAdd({onCommentAdd}: CommentAddProps): ReactElement {
		const {register, handleSubmit, reset, formState: {errors}} = useForm<{ status: string, message: string }>();
		const [status, setStatus] = useState<{ success: boolean, error: boolean, submitting: boolean }>({success: false, error: false, submitting: false});
		
		
		const toggleStatus = (statusName: 'success' | 'error' | 'submitting'): void => {
				setStatus({...status, [statusName]: !status[statusName]});
		}
		
		const handleFormSubmit = async (data: { status: string; message: string }): Promise<void> => {
				toggleStatus("submitting");
				try {
						const mappedData: Partial<Comment> = {
								...data,
								status: statusMapFromPL(data.status),
						};
						const success = await onCommentAdd(mappedData);
						if (!success) {
								toggleStatus("error");
						} else {
								toggleStatus("success");
								setTimeout(() => {
										toggleStatus("success"); // Reset success notice
								}, 8000);
						}
						reset();
				} catch {
						toggleStatus("error");
				}
		};
		
		
		return (
					<>
							{status.error && (
										<Note
													typ="error"
													fill
										>
												Ups, coś poszło nie tak... spróbuj jeszcze raz za kilka chwil
										</Note>
							)}
							{status.success && (
										<Note
													typ="success"
													fill
										>
												Komentarz został dodany pomyślnie!
										</Note>
							)}
							{status.submitting ? (
										<Note
													typ="default"
													fill
													action={<LoadingWheel size={2}/>}
										>
												Zapisuję...
										</Note>
							) : (
										<form className={style.wrapper} onSubmit={handleSubmit(handleFormSubmit)}>
												<Textarea
															{...register('message', {
																	required: "Napisz komentarz...",
																	minLength: {
																			value: 10,
																			message: "Twój komentarz musi zawierać przynajmniej 10 znaków",
																	}
															})}
															errorMessage={errors.message?.message}
															placeholder="Napisz komentarz..."
												/>
												<div className={style.wrapperInputRadio}>
														{['pozytywne', 'obojętne', 'nieznany', 'irytujący', 'niebezpieczeny'].map((typ: string) => (
																	<InputRadioDefault
																				key={typ}
																				{...register('status', {required: "Jakie są Twoje odczucia?"})}
																				value={typ}
																				name='status'
																	/>
														))}
												</div>
												{errors.status?.message && (
															<Note
																		typ="warning"
																		fill
																		style={{fontSize: 'var(--uxu-font-size-mini)'}}
															>
																	{errors.status.message}
															</Note>
												)}
												<div className={style.wrapperSubmit}>
														<button className="btn primary">Dodaj</button>
												</div>
										</form>
							)}
					</>
		);
}