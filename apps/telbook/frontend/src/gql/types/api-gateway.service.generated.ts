export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ArticleContentpartsDynamicZoneInput: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  SettingFooterDynamicZoneInput: { input: any; output: any; }
  TagContentpartsDynamicZoneInput: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  authors?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  contentparts: Array<Maybe<ArticleContentpartsDynamicZone>>;
  cover: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  lead: ComponentContentPartsLead;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo: ComponentOthersSeo;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars['String']['output'];
  type: Enum_Article_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  views: ComponentStatsViews;
};


export type ArticleAuthorsArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleContentpartsDynamicZone = ComponentContentPartsMedia | ComponentContentPartsQuote | ComponentContentPartsTxt | ComponentContentPartsYoutube | Error;

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  authors?: InputMaybe<UsersPermissionsUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lead?: InputMaybe<ComponentContentPartsLeadFiltersInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentOthersSeoFiltersInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  views?: InputMaybe<ComponentStatsViewsFiltersInput>;
};

export type ArticleInput = {
  authors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentparts?: InputMaybe<Array<Scalars['ArticleContentpartsDynamicZoneInput']['input']>>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  lead?: InputMaybe<ComponentContentPartsLeadInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentOthersSeoInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Article_Type>;
  views?: InputMaybe<ComponentStatsViewsInput>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Client = {
  __typename?: 'Client';
  branches?: Maybe<Array<Maybe<ComponentOthersAdress>>>;
  companyData?: Maybe<ComponentOthersCompanyData>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  pagesAndSocialMedia?: Maybe<Array<Maybe<ComponentOthersPagesSocialMedia>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ClientBranchesArgs = {
  filters?: InputMaybe<ComponentOthersAdressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClientPagesAndSocialMediaArgs = {
  filters?: InputMaybe<ComponentOthersPagesSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ClientEntity = {
  __typename?: 'ClientEntity';
  attributes?: Maybe<Client>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ClientEntityResponse = {
  __typename?: 'ClientEntityResponse';
  data?: Maybe<ClientEntity>;
};

export type ClientEntityResponseCollection = {
  __typename?: 'ClientEntityResponseCollection';
  data: Array<ClientEntity>;
  meta: ResponseCollectionMeta;
};

export type ClientFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClientFiltersInput>>>;
  branches?: InputMaybe<ComponentOthersAdressFiltersInput>;
  companyData?: InputMaybe<ComponentOthersCompanyDataFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ClientFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClientFiltersInput>>>;
  pagesAndSocialMedia?: InputMaybe<ComponentOthersPagesSocialMediaFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ClientInput = {
  branches?: InputMaybe<Array<InputMaybe<ComponentOthersAdressInput>>>;
  companyData?: InputMaybe<ComponentOthersCompanyDataInput>;
  pagesAndSocialMedia?: InputMaybe<Array<InputMaybe<ComponentOthersPagesSocialMediaInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ComponentContentPartsLead = {
  __typename?: 'ComponentContentPartsLead';
  id: Scalars['ID']['output'];
  lead: Scalars['String']['output'];
};

export type ComponentContentPartsLeadFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContentPartsLeadFiltersInput>>>;
  lead?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentContentPartsLeadFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentPartsLeadFiltersInput>>>;
};

export type ComponentContentPartsLeadInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  lead?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentContentPartsMaps = {
  __typename?: 'ComponentContentPartsMaps';
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type ComponentContentPartsMapsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContentPartsMapsFiltersInput>>>;
  not?: InputMaybe<ComponentContentPartsMapsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentPartsMapsFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentContentPartsMapsInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentContentPartsMedia = {
  __typename?: 'ComponentContentPartsMedia';
  id: Scalars['ID']['output'];
  media: UploadFileEntityResponse;
};

export type ComponentContentPartsQuote = {
  __typename?: 'ComponentContentPartsQuote';
  id: Scalars['ID']['output'];
  quote: Scalars['String']['output'];
};

export type ComponentContentPartsTxt = {
  __typename?: 'ComponentContentPartsTxt';
  id: Scalars['ID']['output'];
  txt: Scalars['String']['output'];
};

export type ComponentContentPartsYouTube = {
  __typename?: 'ComponentContentPartsYouTube';
  gallery: UploadFileRelationResponseCollection;
  id: Scalars['ID']['output'];
};


export type ComponentContentPartsYouTubeGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentPartsYoutube = {
  __typename?: 'ComponentContentPartsYoutube';
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type ComponentFooterColumn = {
  __typename?: 'ComponentFooterColumn';
  header?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Array<Maybe<ComponentOthersLink>>>;
};


export type ComponentFooterColumnLinkArgs = {
  filters?: InputMaybe<ComponentOthersLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentOthersAdress = {
  __typename?: 'ComponentOthersAdress';
  apartmentNumber?: Maybe<Scalars['String']['output']>;
  emails?: Maybe<Array<Maybe<ComponentOthersEmail>>>;
  googleMaps?: Maybe<ComponentContentPartsMaps>;
  id: Scalars['ID']['output'];
  numberStreet: Scalars['String']['output'];
  phones?: Maybe<Array<Maybe<ComponentOthersPhone>>>;
  postCode: Scalars['String']['output'];
  shortname?: Maybe<TagEntityResponse>;
  street: Scalars['String']['output'];
  typ?: Maybe<Enum_Componentothersadress_Typ>;
};


export type ComponentOthersAdressEmailsArgs = {
  filters?: InputMaybe<ComponentOthersEmailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentOthersAdressPhonesArgs = {
  filters?: InputMaybe<ComponentOthersPhoneFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentOthersAdressFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOthersAdressFiltersInput>>>;
  apartmentNumber?: InputMaybe<StringFilterInput>;
  emails?: InputMaybe<ComponentOthersEmailFiltersInput>;
  googleMaps?: InputMaybe<ComponentContentPartsMapsFiltersInput>;
  not?: InputMaybe<ComponentOthersAdressFiltersInput>;
  numberStreet?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOthersAdressFiltersInput>>>;
  phones?: InputMaybe<ComponentOthersPhoneFiltersInput>;
  postCode?: InputMaybe<StringFilterInput>;
  shortname?: InputMaybe<TagFiltersInput>;
  street?: InputMaybe<StringFilterInput>;
  typ?: InputMaybe<StringFilterInput>;
};

export type ComponentOthersAdressInput = {
  apartmentNumber?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<InputMaybe<ComponentOthersEmailInput>>>;
  googleMaps?: InputMaybe<ComponentContentPartsMapsInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  numberStreet?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<ComponentOthersPhoneInput>>>;
  postCode?: InputMaybe<Scalars['String']['input']>;
  shortname?: InputMaybe<Scalars['ID']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  typ?: InputMaybe<Enum_Componentothersadress_Typ>;
};

export type ComponentOthersCompanyData = {
  __typename?: 'ComponentOthersCompanyData';
  companyName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  krs?: Maybe<Scalars['String']['output']>;
  nip: Scalars['String']['output'];
  regon?: Maybe<Scalars['String']['output']>;
  typ?: Maybe<Enum_Componentotherscompanydata_Typ>;
};

export type ComponentOthersCompanyDataFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOthersCompanyDataFiltersInput>>>;
  companyName?: InputMaybe<StringFilterInput>;
  krs?: InputMaybe<StringFilterInput>;
  nip?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentOthersCompanyDataFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOthersCompanyDataFiltersInput>>>;
  regon?: InputMaybe<StringFilterInput>;
  typ?: InputMaybe<StringFilterInput>;
};

export type ComponentOthersCompanyDataInput = {
  companyName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  krs?: InputMaybe<Scalars['String']['input']>;
  nip?: InputMaybe<Scalars['String']['input']>;
  regon?: InputMaybe<Scalars['String']['input']>;
  typ?: InputMaybe<Enum_Componentotherscompanydata_Typ>;
};

export type ComponentOthersEmail = {
  __typename?: 'ComponentOthersEmail';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentOthersEmailFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOthersEmailFiltersInput>>>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentOthersEmailFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOthersEmailFiltersInput>>>;
};

export type ComponentOthersEmailInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentOthersLink = {
  __typename?: 'ComponentOthersLink';
  id: Scalars['ID']['output'];
  rel?: Maybe<Enum_Componentotherslink_Rel>;
  target?: Maybe<Enum_Componentotherslink_Target>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentOthersLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOthersLinkFiltersInput>>>;
  not?: InputMaybe<ComponentOthersLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOthersLinkFiltersInput>>>;
  rel?: InputMaybe<StringFilterInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentOthersLinksList = {
  __typename?: 'ComponentOthersLinksList';
  id: Scalars['ID']['output'];
  link: Array<Maybe<ComponentOthersLink>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentOthersLinksListLinkArgs = {
  filters?: InputMaybe<ComponentOthersLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentOthersPagesSocialMedia = {
  __typename?: 'ComponentOthersPagesSocialMedia';
  id: Scalars['ID']['output'];
  typ?: Maybe<Enum_Componentotherspagessocialmedia_Typ>;
  url: Scalars['String']['output'];
};

export type ComponentOthersPagesSocialMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOthersPagesSocialMediaFiltersInput>>>;
  not?: InputMaybe<ComponentOthersPagesSocialMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOthersPagesSocialMediaFiltersInput>>>;
  typ?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentOthersPagesSocialMediaInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  typ?: InputMaybe<Enum_Componentotherspagessocialmedia_Typ>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentOthersPhone = {
  __typename?: 'ComponentOthersPhone';
  id: Scalars['ID']['output'];
  phone: Scalars['String']['output'];
  typ?: Maybe<Enum_Componentothersphone_Typ>;
};

export type ComponentOthersPhoneFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOthersPhoneFiltersInput>>>;
  not?: InputMaybe<ComponentOthersPhoneFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOthersPhoneFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  typ?: InputMaybe<StringFilterInput>;
};

export type ComponentOthersPhoneInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  typ?: InputMaybe<Enum_Componentothersphone_Typ>;
};

export type ComponentOthersSeo = {
  __typename?: 'ComponentOthersSeo';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentOthersSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOthersSeoFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentOthersSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOthersSeoFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentOthersSeoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentOthersSettingPage = {
  __typename?: 'ComponentOthersSettingPage';
  filter: Array<Maybe<ComponentOthersSiteBarFilters>>;
  id: Scalars['ID']['output'];
  page: Scalars['String']['output'];
  seo: ComponentOthersSeo;
};


export type ComponentOthersSettingPageFilterArgs = {
  filters?: InputMaybe<ComponentOthersSiteBarFiltersFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentOthersSettingPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOthersSettingPageFiltersInput>>>;
  filter?: InputMaybe<ComponentOthersSiteBarFiltersFiltersInput>;
  not?: InputMaybe<ComponentOthersSettingPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOthersSettingPageFiltersInput>>>;
  page?: InputMaybe<StringFilterInput>;
  seo?: InputMaybe<ComponentOthersSeoFiltersInput>;
};

export type ComponentOthersSettingPageInput = {
  filter?: InputMaybe<Array<InputMaybe<ComponentOthersSiteBarFiltersInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<ComponentOthersSeoInput>;
};

export type ComponentOthersSiteBarFilters = {
  __typename?: 'ComponentOthersSiteBarFilters';
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  typ: Enum_Componentotherssitebarfilters_Typ;
};

export type ComponentOthersSiteBarFiltersFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOthersSiteBarFiltersFiltersInput>>>;
  key?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentOthersSiteBarFiltersFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOthersSiteBarFiltersFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  typ?: InputMaybe<StringFilterInput>;
};

export type ComponentOthersSiteBarFiltersInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  typ?: InputMaybe<Enum_Componentotherssitebarfilters_Typ>;
};

export type ComponentStatsViews = {
  __typename?: 'ComponentStatsViews';
  id: Scalars['ID']['output'];
  views: Scalars['Int']['output'];
};

export type ComponentStatsViewsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentStatsViewsFiltersInput>>>;
  not?: InputMaybe<ComponentStatsViewsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentStatsViewsFiltersInput>>>;
  views?: InputMaybe<IntFilterInput>;
};

export type ComponentStatsViewsInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerMessage = {
  __typename?: 'CustomerMessage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  message: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rating?: Maybe<Enum_Customermessage_Rating>;
  status?: Maybe<Enum_Customermessage_Status>;
  type?: Maybe<Enum_Customermessage_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerMessageEntity = {
  __typename?: 'CustomerMessageEntity';
  attributes?: Maybe<CustomerMessage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CustomerMessageEntityResponse = {
  __typename?: 'CustomerMessageEntityResponse';
  data?: Maybe<CustomerMessageEntity>;
};

export type CustomerMessageEntityResponseCollection = {
  __typename?: 'CustomerMessageEntityResponseCollection';
  data: Array<CustomerMessageEntity>;
  meta: ResponseCollectionMeta;
};

export type CustomerMessageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CustomerMessageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CustomerMessageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CustomerMessageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CustomerMessageInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rating?: InputMaybe<Enum_Customermessage_Rating>;
  status?: InputMaybe<Enum_Customermessage_Status>;
  type?: InputMaybe<Enum_Customermessage_Type>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Article_Type {
  Article = 'article',
  Service = 'service'
}

export enum Enum_Componentothersadress_Typ {
  Primmary = 'primmary',
  Secondary = 'secondary'
}

export enum Enum_Componentotherscompanydata_Typ {
  DzialalnoscGospodarcza = 'dzialalnosc_gospodarcza',
  SpolkaAkcyjna = 'spolka_akcyjna',
  SpolkaCywilna = 'spolka_cywilna',
  SpolkaZOgraniczonaOdpowiedzialnoscia = 'spolka_z_ograniczona_odpowiedzialnoscia'
}

export enum Enum_Componentotherslink_Rel {
  Alternate = 'alternate',
  Author = 'author',
  Bookmark = 'bookmark',
  Canonical = 'canonical',
  DnsPrefetch = 'dns_prefetch',
  External = 'external',
  Help = 'help',
  Icon = 'icon',
  License = 'license',
  Manifest = 'manifest',
  Me = 'me',
  Modulepreload = 'modulepreload',
  Next = 'next',
  Nofollow = 'nofollow',
  Noopener = 'noopener',
  Noreferrer = 'noreferrer',
  Opener = 'opener',
  Pingback = 'pingback',
  Preconnect = 'preconnect',
  Prefetch = 'prefetch',
  Preload = 'preload',
  Prerender = 'prerender',
  Prev = 'prev',
  Search = 'search',
  Stylesheet = 'stylesheet',
  Tag = 'tag'
}

export enum Enum_Componentotherslink_Target {
  Blank = 'blank',
  Parent = 'parent',
  Self = 'self',
  Top = 'top'
}

export enum Enum_Componentotherspagessocialmedia_Typ {
  Facebook = 'facebook',
  Page = 'page',
  Shop = 'shop',
  Tiktok = 'tiktok',
  Twitter = 'twitter',
  Youtube = 'youtube'
}

export enum Enum_Componentothersphone_Typ {
  Fax = 'fax',
  Home = 'home',
  Mobile = 'mobile'
}

export enum Enum_Componentotherssitebarfilters_Typ {
  Articles = 'articles',
  Clients = 'clients',
  Tags = 'tags',
  Users = 'users'
}

export enum Enum_Customermessage_Rating {
  Best = 'best',
  Normal = 'normal',
  Wrong = 'wrong'
}

export enum Enum_Customermessage_Status {
  Delete = 'delete',
  New = 'new',
  Replied = 'replied',
  Unanswered = 'unanswered'
}

export enum Enum_Customermessage_Type {
  Contact = 'contact',
  Feedback = 'feedback'
}

export enum Enum_Tag_Typ {
  City = 'city',
  Countie = 'countie',
  Other = 'other',
  Service = 'service'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Article | Client | ComponentContentPartsLead | ComponentContentPartsMaps | ComponentContentPartsMedia | ComponentContentPartsQuote | ComponentContentPartsTxt | ComponentContentPartsYouTube | ComponentContentPartsYoutube | ComponentFooterColumn | ComponentOthersAdress | ComponentOthersCompanyData | ComponentOthersEmail | ComponentOthersLink | ComponentOthersLinksList | ComponentOthersPagesSocialMedia | ComponentOthersPhone | ComponentOthersSeo | ComponentOthersSettingPage | ComponentOthersSiteBarFilters | ComponentStatsViews | CustomerMessage | I18NLocale | Setting | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createClient?: Maybe<ClientEntityResponse>;
  createCustomerMessage?: Maybe<CustomerMessageEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteClient?: Maybe<ClientEntityResponse>;
  deleteCustomerMessage?: Maybe<CustomerMessageEntityResponse>;
  deleteSetting?: Maybe<SettingEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateClient?: Maybe<ClientEntityResponse>;
  updateCustomerMessage?: Maybe<CustomerMessageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateSetting?: Maybe<SettingEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateClientArgs = {
  data: ClientInput;
};


export type MutationCreateCustomerMessageArgs = {
  data: CustomerMessageInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteClientArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerMessageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateClientArgs = {
  data: ClientInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCustomerMessageArgs = {
  data: CustomerMessageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateSettingArgs = {
  data: SettingInput;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  client?: Maybe<ClientEntityResponse>;
  clients?: Maybe<ClientEntityResponseCollection>;
  customerMessage?: Maybe<CustomerMessageEntityResponse>;
  customerMessages?: Maybe<CustomerMessageEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  setting?: Maybe<SettingEntityResponse>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryClientArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryClientsArgs = {
  filters?: InputMaybe<ClientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCustomerMessageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCustomerMessagesArgs = {
  filters?: InputMaybe<CustomerMessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Setting = {
  __typename?: 'Setting';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  footer: Array<Maybe<SettingFooterDynamicZone>>;
  settingsPages: Array<Maybe<ComponentOthersSettingPage>>;
  socialMedia: Array<Maybe<ComponentOthersPagesSocialMedia>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SettingSettingsPagesArgs = {
  filters?: InputMaybe<ComponentOthersSettingPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SettingSocialMediaArgs = {
  filters?: InputMaybe<ComponentOthersPagesSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SettingEntity = {
  __typename?: 'SettingEntity';
  attributes?: Maybe<Setting>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SettingEntityResponse = {
  __typename?: 'SettingEntityResponse';
  data?: Maybe<SettingEntity>;
};

export type SettingFooterDynamicZone = ComponentFooterColumn | Error;

export type SettingInput = {
  footer?: InputMaybe<Array<Scalars['SettingFooterDynamicZoneInput']['input']>>;
  settingsPages?: InputMaybe<Array<InputMaybe<ComponentOthersSettingPageInput>>>;
  socialMedia?: InputMaybe<Array<InputMaybe<ComponentOthersPagesSocialMediaInput>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  articles?: Maybe<ArticleRelationResponseCollection>;
  contentparts: Array<Maybe<TagContentpartsDynamicZone>>;
  cover: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  lead: ComponentContentPartsLead;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo: ComponentOthersSeo;
  title: Scalars['String']['output'];
  typ: Enum_Tag_Typ;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  views?: Maybe<ComponentStatsViews>;
};


export type TagArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagContentpartsDynamicZone = ComponentContentPartsTxt | Error;

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lead?: InputMaybe<ComponentContentPartsLeadFiltersInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentOthersSeoFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  typ?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  views?: InputMaybe<ComponentStatsViewsFiltersInput>;
};

export type TagInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentparts?: InputMaybe<Array<Scalars['TagContentpartsDynamicZoneInput']['input']>>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  lead?: InputMaybe<ComponentContentPartsLeadInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentOthersSeoInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  typ?: InputMaybe<Enum_Tag_Typ>;
  views?: InputMaybe<ComponentStatsViewsInput>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  articles?: Maybe<ArticleRelationResponseCollection>;
  avatar?: Maybe<UploadFileEntityResponse>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  avatar?: InputMaybe<Scalars['ID']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
