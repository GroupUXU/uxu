import type { SearchEngineConfig } from "utils";
import type { FooterProps } from "../../components/templates/footer/types";
import type { SearchSuggestionContentDetails } from "../../components/organisms/searchEngine/searchEngineInModal/types";

export type ContactFormInputsProps = {
  email: string;
  message: string;
}

export type ContactProps = {
  footer: FooterProps,
  headerMenu: Array<{ href: string, title: string }>,
  sendMessage: (data: ContactFormInputsProps) => Promise<{ status: boolean }>,
  defaultSuggestions: SearchEngineConfig<Array<SearchSuggestionContentDetails>>
};