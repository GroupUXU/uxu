import type {ReactElement} from "react";
import type {NextSeoProps} from "next-seo";
import type {SearchEngineConfig, PhoneFull, Comment} from "utils";
import type {FooterProps} from "../../templates/footer/types";
import type {SearchSuggestionContentDetails} from "../../organisms/searchEngine/searchEngineInModal/types";

export type LayoutPhoneViewProps = {
    seo?: NextSeoProps;
    footer: FooterProps;
    phoneData: PhoneFull;
    comments: Array<Comment>;
    loadMoreComments?: () => void;
    addComment?: () => void;
    searchEngineConfig: SearchEngineConfig<Array<SearchSuggestionContentDetails>>;
    headerMenu: Array<{ href: string, title: string }>;
    topElement?: ReactElement | Array<ReactElement>;
};
