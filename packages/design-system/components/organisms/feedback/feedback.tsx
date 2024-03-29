/* eslint-disable react/jsx-sort-props, react/jsx-no-leaked-render, react/button-has-type -- I don't have time to fix this problem */
/* eslint-disable react/hook-use-state, @typescript-eslint/explicit-function-return-type -- I don't have time for fix */
/* eslint-disable @typescript-eslint/no-misused-promises -- I don't have time for fix */
import { useState, useEffect, useRef } from "react";
import type { ReactElement } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { Modal } from '../../atoms/modal';
import { Note } from '../../atoms/note';
import { LoadingWheel } from '../../atoms/loading';
import { Input, Textarea } from '../../molecules/inputs';
import { FeedbackRatings } from './components/feedbackRatings';
import { MESSAGE_SUCCESS, MESSAGE_FAILURE, FORM_FIELD } from './consts';
import type { FormInputs } from './types';
import styles from './feedback.module.scss';

type FeedbackProps = {
  activeUserEmail?: string;
  switchModalButtonText?: string;
  lastUserRating?: "smile" | "meh" | "frown";
  modalAlignment?: 'left' | 'center' | 'right';
  onFeedbackSubmit: (data: FormInputs) => Promise<{ success: boolean }>;
}

export function Feedback({ onFeedbackSubmit, activeUserEmail, switchModalButtonText, lastUserRating, modalAlignment }: FeedbackProps): ReactElement {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeFeedbackRating, setActiveFeedbackRating] = useState<string | null>(lastUserRating || null);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean, message?: string }>({});
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormInputs>();
  const feedbackRating = watch("feedbackRating");
  const toggleModal = () => {
    setModalOpen(prev => !prev);
  };

  const handleFormSubmit = async (data: FormInputs): Promise<void> => {
    setIsSubmitting(true);
    try {
      const response = await onFeedbackSubmit(data);
      setSubmitStatus({ success: response.success, message: response.success ? MESSAGE_SUCCESS : MESSAGE_FAILURE });
      setTimeout(() => {
        setModalOpen(false);
      }, 5000);
    } catch {
      setSubmitStatus({ success: false, message: MESSAGE_FAILURE });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFeedbackRatingChange = (value: string): void => {
    setActiveFeedbackRating(value);
    if (!switchModalButtonText) {
      void (async () => handleFormSubmit({ email: activeUserEmail, feedbackRating: value, message: undefined }))()
    }
  };

  useEffect(() => {
    if (activeFeedbackRating !== null) {
      setValue("feedbackRating", activeFeedbackRating, { shouldValidate: true, shouldDirty: true });
    }
  }, [activeFeedbackRating, setValue]);

  useEffect(() => {
    const handleFeedbackOutsideClick = (event: MouseEvent): void => {
      if (modalWrapperRef.current && !modalWrapperRef.current.contains(event.target as Node) && isModalOpen) {
        setModalOpen(false);
        setSubmitStatus({});
      }
    };

    document.addEventListener("click", handleFeedbackOutsideClick);

    return () => {
      document.removeEventListener("click", handleFeedbackOutsideClick);
    };
  }, [modalWrapperRef, isModalOpen, setModalOpen, setSubmitStatus]);

  const renderModalContent = () => {
    if (isSubmitting) {
      return <Note typ="warning" action={<LoadingWheel size={2} />}>Zapisuję...</Note>;
    }

    if (submitStatus.success === undefined) {
      return (
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className={styles.formFeedback}
        >
          {!activeUserEmail && <Input placeholder="Adres email" errorMessage={errors.email?.message} {...register('email', FORM_FIELD.email)} type="email" />}
          {switchModalButtonText && <Textarea placeholder="Opisz swoje przemyślenia" errorMessage={errors.message?.message} {...register('message', switchModalButtonText ? { ...FORM_FIELD.message, required: 'To pole jest wymagane.' } : FORM_FIELD.message)} />}
          <div className={styles.footerModalFeedback}>
            <FeedbackRatings feedbackRating={feedbackRating} handleFeedbackRatingChange={handleFeedbackRatingChange} register={register} />
            {switchModalButtonText && <button className={classNames("btn", styles.btnSubmitFeedback)} type="submit">Wyślij</button>}
            {errors.feedbackRating?.message && <Note typ="warning" className={styles.wrapperRatingNoteFeedback} fill>{errors.feedbackRating.message}</Note>}
          </div>
        </form>
      );
    }

    const noteType = submitStatus.success ? "success" : "error";
    return <Note typ={noteType}>{submitStatus.message}</Note>;
  };

  return (
    <div className={styles.wrapperFeedback} ref={modalWrapperRef}>
      <div className={classNames(styles.wrapperModalFeedback, { [styles[`${modalAlignment}`]]: modalAlignment })}>
        <Modal
          open={isModalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
          className={styles.modalFeedback}
        >
          {renderModalContent()}
        </Modal>
      </div>
      {switchModalButtonText ? <button className="btn" aria-label={switchModalButtonText} onClick={toggleModal}>{switchModalButtonText}</button> : <FeedbackRatings feedbackRating={feedbackRating} handleFeedbackRatingChange={handleFeedbackRatingChange} register={register} />}
    </div>
  );
}
