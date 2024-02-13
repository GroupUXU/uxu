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
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  KredytyDokumentyDlaKlientaDynamicZoneInput: { input: any; output: any; }
  KredytyDokumentyKredytuDynamicZoneInput: { input: any; output: any; }
  KredytyPozostaloDoSplaceniaDynamicZoneInput: { input: any; output: any; }
  KredytySplaconeDoDniaDynamicZoneInput: { input: any; output: any; }
  LeadPlanowanyKontaktDynamicZoneInput: { input: any; output: any; }
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

export type ComponentOthersDokumenty = {
  __typename?: 'ComponentOthersDokumenty';
  dokumenty: UploadFileRelationResponseCollection;
  id: Scalars['ID']['output'];
};


export type ComponentOthersDokumentyDokumentyArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentOthersEmail = {
  __typename?: 'ComponentOthersEmail';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentOthersPhone = {
  __typename?: 'ComponentOthersPhone';
  id: Scalars['ID']['output'];
  phone: Scalars['String']['output'];
  typ?: Maybe<Enum_Componentothersphone_Typ>;
};

export type ComponentOthersPlanowanyKontakt = {
  __typename?: 'ComponentOthersPlanowanyKontakt';
  id: Scalars['ID']['output'];
  kiedy: Scalars['DateTime']['output'];
  uwagi?: Maybe<Scalars['String']['output']>;
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

export type ComponentOthersSplacone = {
  __typename?: 'ComponentOthersSplacone';
  data: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  kwota: Scalars['String']['output'];
};

export type ComponentOthersStatus = {
  __typename?: 'ComponentOthersStatus';
  id: Scalars['ID']['output'];
  typ: Enum_Componentothersstatus_Typ;
  wiadomosc?: Maybe<Scalars['String']['output']>;
};

export type ComponentOthersTypPozyczki = {
  __typename?: 'ComponentOthersTypPozyczki';
  id: Scalars['ID']['output'];
  typ?: Maybe<Enum_Componentotherstyppozyczki_Typ>;
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

export type ContentReleasesRelease = {
  __typename?: 'ContentReleasesRelease';
  actions?: Maybe<ContentReleasesReleaseActionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  releasedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentReleasesReleaseAction = {
  __typename?: 'ContentReleasesReleaseAction';
  contentType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entry?: Maybe<GenericMorph>;
  release?: Maybe<ContentReleasesReleaseEntityResponse>;
  type: Enum_Contentreleasesreleaseaction_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentReleasesReleaseActionEntity = {
  __typename?: 'ContentReleasesReleaseActionEntity';
  attributes?: Maybe<ContentReleasesReleaseAction>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseActionEntityResponse = {
  __typename?: 'ContentReleasesReleaseActionEntityResponse';
  data?: Maybe<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseActionEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionEntityResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseActionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  release?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseActionInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  release?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Enum_Contentreleasesreleaseaction_Type>;
};

export type ContentReleasesReleaseActionRelationResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionRelationResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseEntity = {
  __typename?: 'ContentReleasesReleaseEntity';
  attributes?: Maybe<ContentReleasesRelease>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseEntityResponse = {
  __typename?: 'ContentReleasesReleaseEntityResponse';
  data?: Maybe<ContentReleasesReleaseEntity>;
};

export type ContentReleasesReleaseEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseEntityResponseCollection';
  data: Array<ContentReleasesReleaseEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseFiltersInput = {
  actions?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  releasedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  releasedAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
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

export enum Enum_Componentothersphone_Typ {
  Fax = 'fax',
  Home = 'home',
  Mobile = 'mobile'
}

export enum Enum_Componentothersstatus_Typ {
  Odrzucony = 'odrzucony',
  Zaakceptowany = 'zaakceptowany'
}

export enum Enum_Componentotherstyppozyczki_Typ {
  Hipoteka = 'hipoteka',
  Kredyt = 'kredyt',
  Pozyczka = 'pozyczka'
}

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = 'publish',
  Unpublish = 'unpublish'
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

export enum Enum_Kredyty_Bank {
  AasaPolska = 'Aasa_Polska',
  AliorBank = 'Alior_Bank',
  BgzBnpParibas = 'BGZ_BNP_Paribas',
  BnpParibasBankPolska = 'BNP_Paribas_Bank_Polska',
  BankMillennium = 'Bank_Millennium',
  BankOchronySrodowiska = 'Bank_Ochrony_Srodowiska',
  BankPekaoSA = 'Bank_Pekao_S_A',
  BankZachodniWbkSantander = 'Bank_Zachodni_WBK_Santander',
  CitiHandlowy = 'Citi_Handlowy',
  CitibankPolska = 'Citibank_Polska',
  CreditAgricoleBankPolska = 'Credit_Agricole_Bank_Polska',
  CreditAgricolePolska = 'Credit_Agricole_Polska',
  DeutscheBankPolska = 'Deutsche_Bank_Polska',
  EkspresKasa = 'Ekspres_Kasa',
  Eurobank = 'Eurobank',
  ExtraPortfel = 'Extra_Portfel',
  Ferratum = 'Ferratum',
  FerratumBank = 'Ferratum_Bank',
  GetinBank = 'Getin_Bank',
  IngBankSlaski = 'ING_Bank_Slaski',
  IdeaBank = 'Idea_Bank',
  Kredito24 = 'Kredito24',
  KukiPl = 'Kuki_pl',
  MoneyMan = 'MoneyMan',
  NetCredit = 'NetCredit',
  NobleBank = 'Noble_Bank',
  PkoBankPolski = 'PKO_Bank_Polski',
  PozyczkaPlus = 'Pozyczka_Plus',
  ProfiCredit = 'Profi_Credit',
  Provident = 'Provident',
  RaiffeisenBankPolska = 'Raiffeisen_Bank_Polska',
  SantanderBankPolska = 'Santander_Bank_Polska',
  SmartPozyczka = 'Smart_Pozyczka',
  SuperGrosz = 'Super_Grosz',
  SzybkaGotowka = 'Szybka_Gotowka',
  TaniKredyt = 'Tani_Kredyt',
  ViaSms = 'ViaSMS',
  Vivus = 'Vivus',
  Wonga = 'Wonga',
  Zaplo = 'Zaplo',
  MBank = 'mBank'
}

export enum Enum_Kredyty_Oprocentowanietyp {
  Stale = 'stale',
  Zmienne = 'zmienne'
}

export enum Enum_Kredyty_Ratytyp {
  Maljace = 'maljace',
  Stale = 'stale'
}

export enum Enum_Kredyty_Typpozyczki {
  GotowkowyKredyt = 'gotowkowyKredyt',
  GotowkowyPozyczka = 'gotowkowyPozyczka',
  HipotekaKredyt = 'hipotekaKredyt',
  HipotekaPozyczka = 'hipotekaPozyczka',
  KonsolidacjaKredyt = 'konsolidacjaKredyt',
  KonsolidacjaPozyczka = 'konsolidacjaPozyczka',
  SamochodwyKredyt = 'samochodwyKredyt',
  SamochodwyPozyczka = 'samochodwyPozyczka'
}

export enum Enum_Lead_Status {
  Analiza = 'analiza',
  Dokumentacja = 'dokumentacja',
  Nowy = 'nowy',
  Odrzucony = 'odrzucony',
  Prawnik = 'prawnik',
  Umowa = 'umowa',
  Zakonczony = 'zakonczony'
}

export enum Enum_Tag_Typ {
  City = 'city',
  Other = 'other'
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

export type GenericMorph = Article | ComponentContentPartsLead | ComponentContentPartsMaps | ComponentContentPartsMedia | ComponentContentPartsQuote | ComponentContentPartsTxt | ComponentContentPartsYouTube | ComponentContentPartsYoutube | ComponentOthersDokumenty | ComponentOthersEmail | ComponentOthersPhone | ComponentOthersPlanowanyKontakt | ComponentOthersSeo | ComponentOthersSplacone | ComponentOthersStatus | ComponentOthersTypPozyczki | ComponentStatsViews | ContentReleasesRelease | ContentReleasesReleaseAction | CustomerMessage | I18NLocale | Kredyty | Lead | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

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

export type Kredyty = {
  __typename?: 'Kredyty';
  bank?: Maybe<Enum_Kredyty_Bank>;
  calkowitaKwotaDoZaplaty: Scalars['String']['output'];
  calkowityKosztKredytu: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataPierwszejRaty: Scalars['Date']['output'];
  dataUmowyKredytowej: Scalars['Date']['output'];
  dokumentyDlaKlienta: Array<Maybe<KredytyDokumentyDlaKlientaDynamicZone>>;
  dokumentyKredytu?: Maybe<Array<Maybe<KredytyDokumentyKredytuDynamicZone>>>;
  imie: Scalars['String']['output'];
  inneKosztyKredytu: Scalars['String']['output'];
  kodPocztowy?: Maybe<Scalars['String']['output']>;
  kwotaWyplaconaPrzezBank: Scalars['String']['output'];
  lead?: Maybe<LeadEntityResponse>;
  miasto?: Maybe<Scalars['String']['output']>;
  naszaProwizjaProcent: Scalars['String']['output'];
  nazwisko: Scalars['String']['output'];
  numerDomu?: Maybe<Scalars['String']['output']>;
  numerMieszkania?: Maybe<Scalars['String']['output']>;
  numerUmowyKredytowej: Scalars['String']['output'];
  odsetkiDoZwrotuLacznie: Scalars['String']['output'];
  odsetkiKredytu: Scalars['String']['output'];
  okresKredytuWMiesiacach: Scalars['Int']['output'];
  oprocentowanie: Scalars['String']['output'];
  oprocentowanieTyp: Enum_Kredyty_Oprocentowanietyp;
  oszczednoscNaPrzyszlychRatach: Scalars['String']['output'];
  pozostaloDoSplacenia: Array<Maybe<KredytyPozostaloDoSplaceniaDynamicZone>>;
  prowizjaKredytu: Scalars['String']['output'];
  ratyTyp: Enum_Kredyty_Ratytyp;
  rsso: Scalars['String']['output'];
  splaconeDoDnia: Array<Maybe<KredytySplaconeDoDniaDynamicZone>>;
  typPozyczki?: Maybe<Enum_Kredyty_Typpozyczki>;
  ubezpieczenieKredytu: Scalars['String']['output'];
  ulica?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type KredytyDokumentyDlaKlientaDynamicZone = ComponentOthersDokumenty | Error;

export type KredytyDokumentyKredytuDynamicZone = ComponentOthersDokumenty | Error;

export type KredytyEntity = {
  __typename?: 'KredytyEntity';
  attributes?: Maybe<Kredyty>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type KredytyEntityResponse = {
  __typename?: 'KredytyEntityResponse';
  data?: Maybe<KredytyEntity>;
};

export type KredytyEntityResponseCollection = {
  __typename?: 'KredytyEntityResponseCollection';
  data: Array<KredytyEntity>;
  meta: ResponseCollectionMeta;
};

export type KredytyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<KredytyFiltersInput>>>;
  bank?: InputMaybe<StringFilterInput>;
  calkowitaKwotaDoZaplaty?: InputMaybe<StringFilterInput>;
  calkowityKosztKredytu?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dataPierwszejRaty?: InputMaybe<DateFilterInput>;
  dataUmowyKredytowej?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  imie?: InputMaybe<StringFilterInput>;
  inneKosztyKredytu?: InputMaybe<StringFilterInput>;
  kodPocztowy?: InputMaybe<StringFilterInput>;
  kwotaWyplaconaPrzezBank?: InputMaybe<StringFilterInput>;
  lead?: InputMaybe<LeadFiltersInput>;
  miasto?: InputMaybe<StringFilterInput>;
  naszaProwizjaProcent?: InputMaybe<StringFilterInput>;
  nazwisko?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<KredytyFiltersInput>;
  numerDomu?: InputMaybe<StringFilterInput>;
  numerMieszkania?: InputMaybe<StringFilterInput>;
  numerUmowyKredytowej?: InputMaybe<StringFilterInput>;
  odsetkiDoZwrotuLacznie?: InputMaybe<StringFilterInput>;
  odsetkiKredytu?: InputMaybe<StringFilterInput>;
  okresKredytuWMiesiacach?: InputMaybe<IntFilterInput>;
  oprocentowanie?: InputMaybe<StringFilterInput>;
  oprocentowanieTyp?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<KredytyFiltersInput>>>;
  oszczednoscNaPrzyszlychRatach?: InputMaybe<StringFilterInput>;
  prowizjaKredytu?: InputMaybe<StringFilterInput>;
  ratyTyp?: InputMaybe<StringFilterInput>;
  rsso?: InputMaybe<StringFilterInput>;
  typPozyczki?: InputMaybe<StringFilterInput>;
  ubezpieczenieKredytu?: InputMaybe<StringFilterInput>;
  ulica?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type KredytyInput = {
  bank?: InputMaybe<Enum_Kredyty_Bank>;
  calkowitaKwotaDoZaplaty?: InputMaybe<Scalars['String']['input']>;
  calkowityKosztKredytu?: InputMaybe<Scalars['String']['input']>;
  dataPierwszejRaty?: InputMaybe<Scalars['Date']['input']>;
  dataUmowyKredytowej?: InputMaybe<Scalars['Date']['input']>;
  dokumentyDlaKlienta?: InputMaybe<Array<Scalars['KredytyDokumentyDlaKlientaDynamicZoneInput']['input']>>;
  dokumentyKredytu?: InputMaybe<Array<Scalars['KredytyDokumentyKredytuDynamicZoneInput']['input']>>;
  imie?: InputMaybe<Scalars['String']['input']>;
  inneKosztyKredytu?: InputMaybe<Scalars['String']['input']>;
  kodPocztowy?: InputMaybe<Scalars['String']['input']>;
  kwotaWyplaconaPrzezBank?: InputMaybe<Scalars['String']['input']>;
  lead?: InputMaybe<Scalars['ID']['input']>;
  miasto?: InputMaybe<Scalars['String']['input']>;
  naszaProwizjaProcent?: InputMaybe<Scalars['String']['input']>;
  nazwisko?: InputMaybe<Scalars['String']['input']>;
  numerDomu?: InputMaybe<Scalars['String']['input']>;
  numerMieszkania?: InputMaybe<Scalars['String']['input']>;
  numerUmowyKredytowej?: InputMaybe<Scalars['String']['input']>;
  odsetkiDoZwrotuLacznie?: InputMaybe<Scalars['String']['input']>;
  odsetkiKredytu?: InputMaybe<Scalars['String']['input']>;
  okresKredytuWMiesiacach?: InputMaybe<Scalars['Int']['input']>;
  oprocentowanie?: InputMaybe<Scalars['String']['input']>;
  oprocentowanieTyp?: InputMaybe<Enum_Kredyty_Oprocentowanietyp>;
  oszczednoscNaPrzyszlychRatach?: InputMaybe<Scalars['String']['input']>;
  pozostaloDoSplacenia?: InputMaybe<Array<Scalars['KredytyPozostaloDoSplaceniaDynamicZoneInput']['input']>>;
  prowizjaKredytu?: InputMaybe<Scalars['String']['input']>;
  ratyTyp?: InputMaybe<Enum_Kredyty_Ratytyp>;
  rsso?: InputMaybe<Scalars['String']['input']>;
  splaconeDoDnia?: InputMaybe<Array<Scalars['KredytySplaconeDoDniaDynamicZoneInput']['input']>>;
  typPozyczki?: InputMaybe<Enum_Kredyty_Typpozyczki>;
  ubezpieczenieKredytu?: InputMaybe<Scalars['String']['input']>;
  ulica?: InputMaybe<Scalars['String']['input']>;
};

export type KredytyPozostaloDoSplaceniaDynamicZone = ComponentOthersSplacone | Error;

export type KredytyRelationResponseCollection = {
  __typename?: 'KredytyRelationResponseCollection';
  data: Array<KredytyEntity>;
};

export type KredytySplaconeDoDniaDynamicZone = ComponentOthersSplacone | Error;

export type Lead = {
  __typename?: 'Lead';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  kredyty?: Maybe<KredytyRelationResponseCollection>;
  name: Scalars['String']['output'];
  pesel?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  planowanyKontakt: Array<Maybe<LeadPlanowanyKontaktDynamicZone>>;
  recid?: Maybe<Scalars['String']['output']>;
  secondName: Scalars['String']['output'];
  status: Enum_Lead_Status;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LeadKredytyArgs = {
  filters?: InputMaybe<KredytyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LeadEntity = {
  __typename?: 'LeadEntity';
  attributes?: Maybe<Lead>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LeadEntityResponse = {
  __typename?: 'LeadEntityResponse';
  data?: Maybe<LeadEntity>;
};

export type LeadEntityResponseCollection = {
  __typename?: 'LeadEntityResponseCollection';
  data: Array<LeadEntity>;
  meta: ResponseCollectionMeta;
};

export type LeadFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LeadFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  kredyty?: InputMaybe<KredytyFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LeadFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LeadFiltersInput>>>;
  pesel?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  recid?: InputMaybe<StringFilterInput>;
  secondName?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LeadInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  kredyty?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  pesel?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  planowanyKontakt?: InputMaybe<Array<Scalars['LeadPlanowanyKontaktDynamicZoneInput']['input']>>;
  recid?: InputMaybe<Scalars['String']['input']>;
  secondName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Enum_Lead_Status>;
};

export type LeadPlanowanyKontaktDynamicZone = ComponentOthersPlanowanyKontakt | Error;

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  createContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  createCustomerMessage?: Maybe<CustomerMessageEntityResponse>;
  createKredyty?: Maybe<KredytyEntityResponse>;
  createLead?: Maybe<LeadEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  deleteContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  deleteCustomerMessage?: Maybe<CustomerMessageEntityResponse>;
  deleteKredyty?: Maybe<KredytyEntityResponse>;
  deleteLead?: Maybe<LeadEntityResponse>;
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
  updateContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  updateContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  updateCustomerMessage?: Maybe<CustomerMessageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateKredyty?: Maybe<KredytyEntityResponse>;
  updateLead?: Maybe<LeadEntityResponse>;
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


export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
};


export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
};


export type MutationCreateCustomerMessageArgs = {
  data: CustomerMessageInput;
};


export type MutationCreateKredytyArgs = {
  data: KredytyInput;
};


export type MutationCreateLeadArgs = {
  data: LeadInput;
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


export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseActionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerMessageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteKredytyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLeadArgs = {
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


export type MutationUpdateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
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


export type MutationUpdateKredytyArgs = {
  data: KredytyInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLeadArgs = {
  data: LeadInput;
  id: Scalars['ID']['input'];
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
  contentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  contentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  contentReleasesReleaseActions?: Maybe<ContentReleasesReleaseActionEntityResponseCollection>;
  contentReleasesReleases?: Maybe<ContentReleasesReleaseEntityResponseCollection>;
  customerMessage?: Maybe<CustomerMessageEntityResponse>;
  customerMessages?: Maybe<CustomerMessageEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  kredyties?: Maybe<KredytyEntityResponseCollection>;
  kredyty?: Maybe<KredytyEntityResponse>;
  lead?: Maybe<LeadEntityResponse>;
  leads?: Maybe<LeadEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
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


export type QueryContentReleasesReleaseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleasesArgs = {
  filters?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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


export type QueryKredytiesArgs = {
  filters?: InputMaybe<KredytyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryKredytyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLeadArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLeadsArgs = {
  filters?: InputMaybe<LeadFiltersInput>;
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
