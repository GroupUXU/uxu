import type { UseFormRegister } from "react-hook-form";
import type { FormInputs } from "../types";

export type FeedbackRatingsProps = {
  feedbackRating: string;
  handleFeedbackRatingChange: (value: string) => void;
  register: UseFormRegister<FormInputs>;
}