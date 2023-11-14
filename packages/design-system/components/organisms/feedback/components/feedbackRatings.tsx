/* eslint-disable react/jsx-sort-props -- I don't have time to fix this problem */
import React from "react";
import type { ReactElement } from "react";
import { Smile, Meh, Frown } from "react-feather";
import { InputRadioIcon } from '../../../molecules';
import styles from '../feedback.module.scss';
import type { FeedbackRatingsProps } from './types';

export function FeedbackRatings({ feedbackRating, handleFeedbackRatingChange, register }: FeedbackRatingsProps): ReactElement {
  const feedbackOptions = [
    { value: 'smile', Icon: Smile },
    { value: 'meh', Icon: Meh },
    { value: 'frown', Icon: Frown },
  ];

  return (
    <div className={styles.wrapperRatingFeedback}>
      {feedbackOptions.map(({ value, Icon }) => (
        <InputRadioIcon
          key={value}
          icon={<Icon />}
          value={value}
          checked={feedbackRating === value}
          {...register('feedbackRating', {
            required: "Proszę wybrać jedną z opcji",
          })}
          onChange={() => {
            handleFeedbackRatingChange(value);
          }}
        />
      ))}
    </div>
  );
}
