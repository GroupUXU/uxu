import type { RefObject } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { SearchSuggestionContentDetails } from "../../types";

export type SearchModalContentProps = {
  register: UseFormRegister<{ search: string; }>;
  searchQuery: string;
  isAwaitingApiResponse: boolean;
  searchResults: Array<SearchSuggestionContentDetails>;
  defaultSuggestions: Array<SearchSuggestionContentDetails>;
  modalRef: RefObject<HTMLDivElement>;
}
