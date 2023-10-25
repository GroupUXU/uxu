import type { UseFormRegister } from "react-hook-form";
import type { FormInputs } from "../types";

export type FeedbackRatingsProps = {
  feedbackRating: string;
  handleFeedbackRatingChange:  Promise<(value: string) => void>;
  register: UseFormRegister<FormInputs>;
}