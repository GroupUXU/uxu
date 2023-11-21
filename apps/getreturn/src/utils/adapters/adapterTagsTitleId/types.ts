export type List = Array<{ title: string; id: string; slug: string }>;

export type Item = {
  id: string | undefined;
  attributes?: {
    title: string;
  } | null;
}

