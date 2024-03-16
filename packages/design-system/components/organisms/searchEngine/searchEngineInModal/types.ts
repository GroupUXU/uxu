export type SearchSuggestionContentDetails = {
  slug: string;
  title: string;
  lead?: string;
  type: "post" | "page" | 'phone';
};