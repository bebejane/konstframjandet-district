type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BooleanType: any;
  CustomData: any;
  DateTime: any;
  FloatType: any;
  IntType: any;
  ItemId: any;
  JsonField: any;
  MetaTagAttributes: any;
  UploadId: any;
};

type AboutModelContentBlocksField = AudioRecord | ButtonRecord | DownloadPdfRecord | ImageGalleryRecord | ImageRecord | LogoRecord | VideoRecord;

type AboutModelContentField = {
  __typename?: 'AboutModelContentField';
  blocks: Array<AboutModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type AboutModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  district?: InputMaybe<LinkFilter>;
  dropcap?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  intro?: InputMaybe<TextFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

enum AboutModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  dropcap_ASC = 'dropcap_ASC',
  dropcap_DESC = 'dropcap_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Om (about) */
type AboutRecord = RecordInterface & {
  __typename?: 'AboutRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content?: Maybe<AboutModelContentField>;
  district: DistrictRecord;
  dropcap?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  intro?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['IntType']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};


/** Record of type Om (about) */
type AboutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Om (about) */
type AboutRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Ljud (audio) */
type AudioRecord = RecordInterface & {
  __typename?: 'AudioRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  url: Scalars['String'];
};


/** Block of type Ljud (audio) */
type AudioRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

/** Block of type Knapp (button) */
type ButtonRecord = RecordInterface & {
  __typename?: 'ButtonRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  text: Scalars['String'];
  url: Scalars['String'];
};


/** Block of type Knapp (button) */
type ButtonRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType'];
  blue: Scalars['IntType'];
  cssRgb: Scalars['String'];
  green: Scalars['IntType'];
  hex: Scalars['String'];
  red: Scalars['IntType'];
};

/** Specifies how to filter Color fields */
type ColorFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by creation datetime */
type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

type DistrictModelContentContactBlocksField = AudioRecord | ButtonRecord | ImageGalleryRecord | ImageRecord | LogoRecord | VideoRecord;

type DistrictModelContentContactField = {
  __typename?: 'DistrictModelContentContactField';
  blocks: Array<DistrictModelContentContactBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type DistrictModelContentField = ImageRecord | ImageShortcutRecord | StartImageGalleryRecord | StartLatestNewsRecord | StartProjectRecord | StartSelectedDistrictNewsRecord | StartSelectedNewsRecord | StartTextRecord;

type DistrictModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<DistrictModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DistrictModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  color?: InputMaybe<ColorFilter>;
  contentContact?: InputMaybe<StructuredTextFilter>;
  dropcap?: InputMaybe<BooleanFilter>;
  email?: InputMaybe<StringFilter>;
  englishShortcut?: InputMaybe<BooleanFilter>;
  facebook?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  instagram?: InputMaybe<StringFilter>;
  intro?: InputMaybe<TextFilter>;
  name?: InputMaybe<StringFilter>;
  subdomain?: InputMaybe<StringFilter>;
};

enum DistrictModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  dropcap_ASC = 'dropcap_ASC',
  dropcap_DESC = 'dropcap_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  englishShortcut_ASC = 'englishShortcut_ASC',
  englishShortcut_DESC = 'englishShortcut_DESC',
  facebook_ASC = 'facebook_ASC',
  facebook_DESC = 'facebook_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  instagram_ASC = 'instagram_ASC',
  instagram_DESC = 'instagram_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  subdomain_ASC = 'subdomain_ASC',
  subdomain_DESC = 'subdomain_DESC'
}

/** Record of type Distrikt (district) */
type DistrictRecord = RecordInterface & {
  __typename?: 'DistrictRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  color: ColorField;
  content: Array<DistrictModelContentField>;
  contentContact?: Maybe<DistrictModelContentContactField>;
  dropcap?: Maybe<Scalars['BooleanType']>;
  email?: Maybe<Scalars['String']>;
  englishShortcut?: Maybe<Scalars['BooleanType']>;
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  instagram?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  subdomain: Scalars['String'];
};


/** Record of type Distrikt (district) */
type DistrictRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Distrikt (district) */
type DistrictRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Länk till pdf (download_pdf) */
type DownloadPdfRecord = RecordInterface & {
  __typename?: 'DownloadPdfRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image: ImageFileField;
  text: Scalars['String'];
  url: Scalars['String'];
};


/** Block of type Länk till pdf (download_pdf) */
type DownloadPdfRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ExternalLinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExternalLinkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExternalLinkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

enum ExternalLinkModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Extern länk (external_link) */
type ExternalLinkRecord = RecordInterface & {
  __typename?: 'ExternalLinkRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<ImageFileField>;
  intro?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};


/** Record of type Extern länk (external_link) */
type ExternalLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Extern länk (external_link) */
type ExternalLinkRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']>;
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  thumbhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


type FileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
};


type FileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


type FileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type FileFieldInterface = {
  _createdAt: Scalars['DateTime'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']>;
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  thumbhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


type FileFieldInterfacealtArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
};


type FileFieldInterfacecustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfacefocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


type FileFieldInterfacetitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

type ImageFileField = FileFieldInterface & {
  __typename?: 'ImageFileField';
  _createdAt: Scalars['DateTime'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']>;
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint: focalPoint;
  format: Scalars['String'];
  height: Scalars['IntType'];
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage: ResponsiveImage;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  thumbhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width: Scalars['IntType'];
};


type ImageFileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
};


type ImageFileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


type ImageFileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Block of type Bilder (image_gallery) */
type ImageGalleryRecord = RecordInterface & {
  __typename?: 'ImageGalleryRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  images: Array<ImageFileField>;
};


/** Block of type Bilder (image_gallery) */
type ImageGalleryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Bild (image) */
type ImageRecord = RecordInterface & {
  __typename?: 'ImageRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image: ImageFileField;
  layout?: Maybe<Scalars['String']>;
};


/** Block of type Bild (image) */
type ImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImageShortcutModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Bildgenväg (image_shortcut) */
type ImageShortcutRecord = RecordInterface & {
  __typename?: 'ImageShortcutRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  headline: Scalars['String'];
  id: Scalars['ItemId'];
  image: ImageFileField;
  layout?: Maybe<Scalars['String']>;
  link: ImageShortcutModelLinkField;
  text: Scalars['String'];
};


/** Block of type Bildgenväg (image_shortcut) */
type ImageShortcutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
   */
  bgReplace?: InputMaybe<Scalars['String']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace-neg-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-neg-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-pos)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-cs)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale)
   */
  upscale?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale-fallback)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']>;
};

enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

enum ImgixParamsFill {
  blur = 'blur',
  gen = 'gen',
  generative = 'generative',
  gradient = 'gradient',
  solid = 'solid'
}

enum ImgixParamsFillGenPos {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientCs {
  hsl = 'hsl',
  lch = 'lch',
  linear = 'linear',
  oklab = 'oklab',
  srgb = 'srgb'
}

enum ImgixParamsFillGradientLinearDirection {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientType {
  linear = 'linear',
  radial = 'radial'
}

enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block'
}

enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsMarkTile {
  grid = 'grid'
}

enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

enum ImgixParamsTransparency {
  grid = 'grid'
}

enum ImgixParamsTrim {
  auto = 'auto',
  color = 'color'
}

enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

enum ImgixParamsTxtFit {
  max = 'max'
}

/** Specifies how to filter by usage */
type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

type InternalLinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<InternalLinkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InternalLinkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  record?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
};

enum InternalLinkModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

type InternalLinkModelRecordField = AboutRecord | NewsRecord | ProjectRecord;

/** Record of type Intern länk (internal_link) */
type InternalLinkRecord = RecordInterface & {
  __typename?: 'InternalLinkRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  record: InternalLinkModelRecordField;
  title: Scalars['String'];
};


/** Record of type Intern länk (internal_link) */
type InternalLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenProjectAndProjectSubpage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProjectModelFieldsReferencingProjectSubpageModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProjectModelFieldsReferencingProjectSubpageModel>>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenProjectAndProjectSubpage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProjectAndProjectSubpage>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter by ID */
type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

/** Specifies how to filter Single-link fields */
type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

/** Linking locales */
enum LinkingLocale {
  _nonLocalized = '_nonLocalized',
  en = 'en'
}

/** Specifies how to filter by linking locales */
type LinkingLocalesFilter = {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn?: InputMaybe<Array<LinkingLocale>>;
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn?: InputMaybe<Array<LinkingLocale>>;
};

/** Specifies how to filter Multiple-links fields */
type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

/** Block of type Logotyp(er) (logo) */
type LogoRecord = RecordInterface & {
  __typename?: 'LogoRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  logotypes: Array<FileField>;
};


/** Block of type Logotyp(er) (logo) */
type LogoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

type NewsModelContentBlocksField = AudioRecord | ButtonRecord | DownloadPdfRecord | ImageGalleryRecord | ImageRecord | LogoRecord | VideoRecord;

type NewsModelContentField = {
  __typename?: 'NewsModelContentField';
  blocks: Array<NewsModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type NewsModelExtraField = {
  __typename?: 'NewsModelExtraField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type NewsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  address?: InputMaybe<StringFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  date?: InputMaybe<StringFilter>;
  district?: InputMaybe<LinkFilter>;
  dropcap?: InputMaybe<BooleanFilter>;
  externalLink?: InputMaybe<StringFilter>;
  extra?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  misc?: InputMaybe<StringFilter>;
  price?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<StringFilter>;
  time?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  where?: InputMaybe<StringFilter>;
};

enum NewsModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  address_ASC = 'address_ASC',
  address_DESC = 'address_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  dropcap_ASC = 'dropcap_ASC',
  dropcap_DESC = 'dropcap_DESC',
  externalLink_ASC = 'externalLink_ASC',
  externalLink_DESC = 'externalLink_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  misc_ASC = 'misc_ASC',
  misc_DESC = 'misc_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  subtitle_ASC = 'subtitle_ASC',
  subtitle_DESC = 'subtitle_DESC',
  time_ASC = 'time_ASC',
  time_DESC = 'time_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  where_ASC = 'where_ASC',
  where_DESC = 'where_DESC'
}

/** Record of type Aktuellt (news) */
type NewsRecord = RecordInterface & {
  __typename?: 'NewsRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  address?: Maybe<Scalars['String']>;
  content?: Maybe<NewsModelContentField>;
  date?: Maybe<Scalars['String']>;
  district: DistrictRecord;
  dropcap?: Maybe<Scalars['BooleanType']>;
  externalLink?: Maybe<Scalars['String']>;
  extra?: Maybe<NewsModelExtraField>;
  id: Scalars['ItemId'];
  image?: Maybe<ImageFileField>;
  intro?: Maybe<Scalars['String']>;
  misc?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  where?: Maybe<Scalars['String']>;
};


/** Record of type Aktuellt (news) */
type NewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Aktuellt (news) */
type NewsRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by image orientation */
type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']>;
};

type ProjectModelContentBlocksField = AudioRecord | ButtonRecord | DownloadPdfRecord | ImageGalleryRecord | ImageRecord | LogoRecord | VideoRecord;

type ProjectModelContentField = {
  __typename?: 'ProjectModelContentField';
  blocks: Array<ProjectModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Linking fields */
enum ProjectModelFieldsReferencingProjectSubpageModel {
  project_subpage = 'project_subpage'
}

type ProjectModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  color?: InputMaybe<ColorFilter>;
  colorOption?: InputMaybe<StringFilter>;
  completed?: InputMaybe<BooleanFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  district?: InputMaybe<LinkFilter>;
  dropcap?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  subpage?: InputMaybe<LinksFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  webpage?: InputMaybe<StringFilter>;
};

enum ProjectModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  colorOption_ASC = 'colorOption_ASC',
  colorOption_DESC = 'colorOption_DESC',
  completed_ASC = 'completed_ASC',
  completed_DESC = 'completed_DESC',
  dropcap_ASC = 'dropcap_ASC',
  dropcap_DESC = 'dropcap_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  subtitle_ASC = 'subtitle_ASC',
  subtitle_DESC = 'subtitle_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  webpage_ASC = 'webpage_ASC',
  webpage_DESC = 'webpage_DESC'
}

/** Record of type Projekt (project) */
type ProjectRecord = RecordInterface & {
  __typename?: 'ProjectRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  color: ColorField;
  colorOption: Scalars['String'];
  completed?: Maybe<Scalars['BooleanType']>;
  content?: Maybe<ProjectModelContentField>;
  district: DistrictRecord;
  dropcap?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  image?: Maybe<ImageFileField>;
  intro?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['IntType']>;
  slug: Scalars['String'];
  subpage: Array<ProjectSubpageRecord>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  webpage?: Maybe<Scalars['String']>;
};


/** Record of type Projekt (project) */
type ProjectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Projekt (project) */
type ProjectRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ProjectSubpageModelContentBlocksField = AudioRecord | ButtonRecord | DownloadPdfRecord | ImageGalleryRecord | ImageRecord | LogoRecord | VideoRecord;

type ProjectSubpageModelContentField = {
  __typename?: 'ProjectSubpageModelContentField';
  blocks: Array<ProjectSubpageModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type ProjectSubpageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectSubpageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectSubpageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  colorOption?: InputMaybe<StringFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  district?: InputMaybe<LinkFilter>;
  dropcap?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

enum ProjectSubpageModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  colorOption_ASC = 'colorOption_ASC',
  colorOption_DESC = 'colorOption_DESC',
  dropcap_ASC = 'dropcap_ASC',
  dropcap_DESC = 'dropcap_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  subtitle_ASC = 'subtitle_ASC',
  subtitle_DESC = 'subtitle_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type Undersida (project_subpage) */
type ProjectSubpageRecord = RecordInterface & {
  __typename?: 'ProjectSubpageRecord';
  _allReferencingProjects: Array<ProjectRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProjectsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  colorOption: Scalars['String'];
  content?: Maybe<ProjectSubpageModelContentField>;
  district: DistrictRecord;
  dropcap?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  image?: Maybe<ImageFileField>;
  intro?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** Record of type Undersida (project_subpage) */
type ProjectSubpageRecord_allReferencingProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndProjectSubpage>;
};


/** Record of type Undersida (project_subpage) */
type ProjectSubpageRecord_allReferencingProjectsMetaArgs = {
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndProjectSubpage>;
};


/** Record of type Undersida (project_subpage) */
type ProjectSubpageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Undersida (project_subpage) */
type ProjectSubpageRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by publication datetime */
type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** The query root for this schema */
type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allAboutsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allDistrictsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allExternalLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allInternalLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectSubpagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a specific record */
  about?: Maybe<AboutRecord>;
  /** Returns a collection of records */
  allAbouts: Array<AboutRecord>;
  /** Returns a collection of records */
  allDistricts: Array<DistrictRecord>;
  /** Returns a collection of records */
  allExternalLinks: Array<ExternalLinkRecord>;
  /** Returns a collection of records */
  allInternalLinks: Array<InternalLinkRecord>;
  /** Returns a collection of records */
  allNews: Array<NewsRecord>;
  /** Returns a collection of records */
  allProjectSubpages: Array<ProjectSubpageRecord>;
  /** Returns a collection of records */
  allProjects: Array<ProjectRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  district?: Maybe<DistrictRecord>;
  /** Returns a specific record */
  externalLink?: Maybe<ExternalLinkRecord>;
  /** Returns a specific record */
  internalLink?: Maybe<InternalLinkRecord>;
  /** Returns a specific record */
  news?: Maybe<NewsRecord>;
  /** Returns a specific record */
  project?: Maybe<ProjectRecord>;
  /** Returns a specific record */
  projectSubpage?: Maybe<ProjectSubpageRecord>;
  /** Returns the single instance record */
  start?: Maybe<StartRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};


/** The query root for this schema */
type Query_allAboutsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allDistrictsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistrictModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allExternalLinksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allInternalLinksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allNewsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProjectSubpagesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectSubpageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProjectsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_siteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryaboutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
};


/** The query root for this schema */
type QueryallAboutsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallDistrictsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistrictModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistrictModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallExternalLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExternalLinkModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExternalLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallInternalLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InternalLinkModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InternalLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProjectSubpagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectSubpageModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectSubpageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QuerydistrictArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistrictModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistrictModelOrderBy>>>;
};


/** The query root for this schema */
type QueryexternalLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExternalLinkModelOrderBy>>>;
};


/** The query root for this schema */
type QueryinternalLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InternalLinkModelOrderBy>>>;
};


/** The query root for this schema */
type QuerynewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
};


/** The query root for this schema */
type QueryprojectArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
};


/** The query root for this schema */
type QueryprojectSubpageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectSubpageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectSubpageModelOrderBy>>>;
};


/** The query root for this schema */
type QuerystartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryuploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

type RecordInterface = {
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
};


type RecordInterface_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
};

type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']>;
};


type SitefaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


type SiteglobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum SiteLocale {
  en = 'en'
}

/** Specifies how to filter Slug fields */
type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type StartImageGalleryModelLinksField = ExternalLinkRecord | NewsRecord | ProjectRecord;

/** Block of type Bild galleri (start_image_gallery) */
type StartImageGalleryRecord = RecordInterface & {
  __typename?: 'StartImageGalleryRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  links: Array<StartImageGalleryModelLinksField>;
};


/** Block of type Bild galleri (start_image_gallery) */
type StartImageGalleryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Senaste aktuellt (start_latest_news) */
type StartLatestNewsRecord = RecordInterface & {
  __typename?: 'StartLatestNewsRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  count: Scalars['IntType'];
  id: Scalars['ItemId'];
};


/** Block of type Senaste aktuellt (start_latest_news) */
type StartLatestNewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type StartModelSelectedInDistrictsField = NewsRecord | ProjectRecord;

/** Block of type Utvalda projekt (start_project) */
type StartProjectRecord = RecordInterface & {
  __typename?: 'StartProjectRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  projects: Array<ProjectRecord>;
};


/** Block of type Utvalda projekt (start_project) */
type StartProjectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Start (start) */
type StartRecord = RecordInterface & {
  __typename?: 'StartRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  selectedInDistricts: Array<StartModelSelectedInDistrictsField>;
};


/** Record of type Start (start) */
type StartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type I distrikten (OBS! Ej för distrikt) (start_selected_district_news) */
type StartSelectedDistrictNewsRecord = RecordInterface & {
  __typename?: 'StartSelectedDistrictNewsRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
};


/** Block of type I distrikten (OBS! Ej för distrikt) (start_selected_district_news) */
type StartSelectedDistrictNewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Utvalda aktuellt (start_selected_news) */
type StartSelectedNewsRecord = RecordInterface & {
  __typename?: 'StartSelectedNewsRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  news: Array<NewsRecord>;
};


/** Block of type Utvalda aktuellt (start_selected_news) */
type StartSelectedNewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type StartTextModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Text (start_text) */
type StartTextRecord = RecordInterface & {
  __typename?: 'StartTextRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  link: StartTextModelLinkField;
  text: Scalars['String'];
};


/** Block of type Text (start_text) */
type StartTextRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Text (start_text) */
type StartTextRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by status */
type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp?: InputMaybe<Scalars['BooleanType']>;
};

/** Specifies how to filter Structured Text fields values */
type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** Specifies how to filter text fields */
type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by upload type */
type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by default alt */
type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by filename */
type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by height */
type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by ID */
type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter by MD5 */
type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by mime type */
type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by size */
type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by tags */
type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Specifies how to filter by default title */
type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

/** Specifies how to filter by update datetime */
type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>;
};

type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']>;
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  framerate?: Maybe<Scalars['Int']>;
  height: Scalars['IntType'];
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbhash?: Maybe<Scalars['String']>;
  thumbnailUrl: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  width: Scalars['IntType'];
};


type UploadVideoFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type UploadVideoFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
};


type UploadVideoFieldmp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


type UploadVideoFieldthumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


type UploadVideoFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']>;
};

type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType'];
  provider: Scalars['String'];
  providerUid: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['IntType'];
};

enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

/** Block of type Video (video) */
type VideoRecord = RecordInterface & {
  __typename?: 'VideoRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  caption?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  video?: Maybe<VideoField>;
};


/** Block of type Video (video) */
type VideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
};

type AllAboutsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type AllAboutsQuery = { __typename?: 'Query', abouts: Array<{ __typename?: 'AboutRecord', _createdAt: any, _updatedAt: any, id: any, title: string, slug: string, intro?: string | null, dropcap?: any | null }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type AboutQueryVariables = Exact<{
  slug: Scalars['String'];
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type AboutQuery = { __typename?: 'Query', about?: { __typename?: 'AboutRecord', _createdAt: any, _updatedAt: any, id: any, title: string, slug: string, intro?: string | null, dropcap?: any | null, content?: { __typename?: 'AboutModelContentField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'DownloadPdfRecord', id: any, url: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllDistricsQueryVariables = Exact<{ [key: string]: never; }>;


type AllDistricsQuery = { __typename?: 'Query', districts: Array<{ __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }> };

type DistrictQueryVariables = Exact<{
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type DistrictQuery = { __typename?: 'Query', district?: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, facebook?: string | null, instagram?: string | null, englishShortcut?: any | null, intro?: string | null, color: { __typename?: 'ColorField', hex: string, red: any, green: any, blue: any }, contentContact?: { __typename?: 'DistrictModelContentContactField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, content: Array<{ __typename: 'ImageRecord' } | { __typename: 'ImageShortcutRecord', id: any, headline: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } } | { __typename: 'StartImageGalleryRecord', id: any, links: Array<{ __typename?: 'ExternalLinkRecord', id: any, title: string, url: string, linkIntro?: string | null, linkImage?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null } | { __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } } | { __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartLatestNewsRecord', id: any, count: any } | { __typename: 'StartProjectRecord', id: any, projects: Array<{ __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartSelectedDistrictNewsRecord' } | { __typename: 'StartSelectedNewsRecord', id: any, news: Array<{ __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } }> } | { __typename: 'StartTextRecord', text: string, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type DistrictBySubdomainQueryVariables = Exact<{
  subdomain?: InputMaybe<Scalars['String']>;
}>;


type DistrictBySubdomainQuery = { __typename?: 'Query', district?: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, facebook?: string | null, instagram?: string | null, englishShortcut?: any | null, intro?: string | null, color: { __typename?: 'ColorField', hex: string, red: any, green: any, blue: any }, contentContact?: { __typename?: 'DistrictModelContentContactField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, content: Array<{ __typename: 'ImageRecord' } | { __typename: 'ImageShortcutRecord', id: any, headline: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } } | { __typename: 'StartImageGalleryRecord', id: any, links: Array<{ __typename?: 'ExternalLinkRecord', id: any, title: string, url: string, linkIntro?: string | null, linkImage?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null } | { __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } } | { __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartLatestNewsRecord', id: any, count: any } | { __typename: 'StartProjectRecord', id: any, projects: Array<{ __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartSelectedDistrictNewsRecord' } | { __typename: 'StartSelectedNewsRecord', id: any, news: Array<{ __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } }> } | { __typename: 'StartTextRecord', text: string, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AboutFragment = { __typename?: 'AboutRecord', _createdAt: any, _updatedAt: any, id: any, title: string, slug: string, intro?: string | null, dropcap?: any | null, content?: { __typename?: 'AboutModelContentField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'DownloadPdfRecord', id: any, url: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type AboutFragmentLightFragment = { __typename?: 'AboutRecord', _createdAt: any, _updatedAt: any, id: any, title: string, slug: string, intro?: string | null, dropcap?: any | null };

type DistrictFragment = { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, facebook?: string | null, instagram?: string | null, englishShortcut?: any | null, intro?: string | null, color: { __typename?: 'ColorField', hex: string, red: any, green: any, blue: any }, contentContact?: { __typename?: 'DistrictModelContentContactField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, content: Array<{ __typename: 'ImageRecord' } | { __typename: 'ImageShortcutRecord', id: any, headline: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } } | { __typename: 'StartImageGalleryRecord', id: any, links: Array<{ __typename?: 'ExternalLinkRecord', id: any, title: string, url: string, linkIntro?: string | null, linkImage?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null } | { __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } } | { __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartLatestNewsRecord', id: any, count: any } | { __typename: 'StartProjectRecord', id: any, projects: Array<{ __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartSelectedDistrictNewsRecord' } | { __typename: 'StartSelectedNewsRecord', id: any, news: Array<{ __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } }> } | { __typename: 'StartTextRecord', text: string, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type DistrictFragmentLightFragment = { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } };

type ExternalLinkFragment = { __typename?: 'ExternalLinkRecord', id: any, title: string, url: string, linkIntro?: string | null, linkImage?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null };

type ImageFragment = { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } };

type ImageLogoFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null };

type ImageMediumFragment = { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', sizes: string, src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null } };

type ImageThumbnailFragment = { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } };

type NewsFragment = { __typename?: 'NewsRecord', id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, dropcap?: any | null, _createdAt: any, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, facebook?: string | null, instagram?: string | null, englishShortcut?: any | null, intro?: string | null, color: { __typename?: 'ColorField', hex: string, red: any, green: any, blue: any }, contentContact?: { __typename?: 'DistrictModelContentContactField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, content: Array<{ __typename: 'ImageRecord' } | { __typename: 'ImageShortcutRecord', id: any, headline: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } } | { __typename: 'StartImageGalleryRecord', id: any, links: Array<{ __typename?: 'ExternalLinkRecord', id: any, title: string, url: string, linkIntro?: string | null, linkImage?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null } | { __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } } | { __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartLatestNewsRecord', id: any, count: any } | { __typename: 'StartProjectRecord', id: any, projects: Array<{ __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartSelectedDistrictNewsRecord' } | { __typename: 'StartSelectedNewsRecord', id: any, news: Array<{ __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } }> } | { __typename: 'StartTextRecord', text: string, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }, extra?: { __typename?: 'NewsModelExtraField', value: any } | null, content?: { __typename?: 'NewsModelContentField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'DownloadPdfRecord', id: any, url: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type NewsFragmentLightFragment = { __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } };

type ProjectFragment = { __typename?: 'ProjectRecord', id: any, title: string, subtitle?: string | null, slug: string, _createdAt: any, intro?: string | null, colorOption: string, completed?: any | null, webpage?: string | null, dropcap?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, content?: { __typename?: 'ProjectModelContentField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'DownloadPdfRecord', id: any, url: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type ProjectFragmentLightFragment = { __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null };

type ProjectSubpageFragment = { __typename?: 'ProjectSubpageRecord', _createdAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null, dropcap?: any | null, colorOption: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, content?: { __typename?: 'ProjectSubpageModelContentField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'DownloadPdfRecord', id: any, url: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type ProjectSubpageFragmentLightFragment = { __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null };

type SeoMetaTagsFragment = { __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string };

type SiteFragment = { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null } | null } | null };

type VideoFragment = { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null };

type GlobalQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalQuery = { __typename?: 'Query', site: { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null } | null } | null } };

type MenuQueryVariables = Exact<{
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type MenuQuery = { __typename?: 'Query', abouts: Array<{ __typename?: 'AboutRecord', id: any, slug: string, title: string }>, projects: Array<{ __typename?: 'ProjectRecord', id: any, slug: string, title: string }>, news: Array<{ __typename?: 'NewsRecord', id: any, slug: string, title: string }>, districts: Array<{ __typename?: 'DistrictRecord', id: any, subdomain: string, facebook?: string | null, instagram?: string | null, name: string }> };

type AllNewsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type AllNewsQuery = { __typename?: 'Query', news: Array<{ __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type NewsQueryVariables = Exact<{
  slug: Scalars['String'];
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type NewsQuery = { __typename?: 'Query', news?: { __typename?: 'NewsRecord', id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, dropcap?: any | null, _createdAt: any, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, facebook?: string | null, instagram?: string | null, englishShortcut?: any | null, intro?: string | null, color: { __typename?: 'ColorField', hex: string, red: any, green: any, blue: any }, contentContact?: { __typename?: 'DistrictModelContentContactField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, content: Array<{ __typename: 'ImageRecord' } | { __typename: 'ImageShortcutRecord', id: any, headline: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } } | { __typename: 'StartImageGalleryRecord', id: any, links: Array<{ __typename?: 'ExternalLinkRecord', id: any, title: string, url: string, linkIntro?: string | null, linkImage?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null } | { __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } } | { __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartLatestNewsRecord', id: any, count: any } | { __typename: 'StartProjectRecord', id: any, projects: Array<{ __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartSelectedDistrictNewsRecord' } | { __typename: 'StartSelectedNewsRecord', id: any, news: Array<{ __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } }> } | { __typename: 'StartTextRecord', text: string, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }, extra?: { __typename?: 'NewsModelExtraField', value: any } | null, content?: { __typename?: 'NewsModelContentField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'DownloadPdfRecord', id: any, url: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllProjectsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type AllProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type ProjectQueryVariables = Exact<{
  slug: Scalars['String'];
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type ProjectQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectRecord', id: any, title: string, subtitle?: string | null, slug: string, _createdAt: any, intro?: string | null, colorOption: string, completed?: any | null, webpage?: string | null, dropcap?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, content?: { __typename?: 'ProjectModelContentField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'DownloadPdfRecord', id: any, url: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type ProjectBySubpageQueryVariables = Exact<{
  subpageId?: InputMaybe<Scalars['ItemId']>;
}>;


type ProjectBySubpageQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null } | null };

type ProjectSubpageQueryVariables = Exact<{
  slug: Scalars['String'];
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type ProjectSubpageQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectSubpageRecord', _createdAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null, dropcap?: any | null, colorOption: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, content?: { __typename?: 'ProjectSubpageModelContentField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'DownloadPdfRecord', id: any, url: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type SiteSearchQueryVariables = Exact<{
  aboutIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  newsIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  projectIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type SiteSearchQuery = { __typename?: 'Query', abouts: Array<{ __typename: 'AboutRecord', _modelApiKey: string, title: string, slug: string, text?: string | null, district: { __typename?: 'DistrictRecord', id: any, subdomain: string } }>, news: Array<{ __typename: 'NewsRecord', _modelApiKey: string, title: string, slug: string, text?: string | null, district: { __typename?: 'DistrictRecord', id: any, subdomain: string } }>, projects: Array<{ __typename: 'ProjectRecord', _modelApiKey: string, title: string, slug: string, text?: string | null, district: { __typename?: 'DistrictRecord', id: any, subdomain: string } }>, projectSubpages: Array<{ __typename: 'ProjectSubpageRecord', _modelApiKey: string, title?: string | null, slug: string, text?: string | null, district: { __typename?: 'DistrictRecord', id: any, subdomain: string } }> };

type StartQueryVariables = Exact<{
  districtId?: InputMaybe<Scalars['ItemId']>;
}>;


type StartQuery = { __typename?: 'Query', start?: { __typename?: 'StartRecord', id: any, selectedInDistricts: Array<{ __typename: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } } | { __typename: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | null, latestNews: Array<{ __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } }>, district?: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, facebook?: string | null, instagram?: string | null, englishShortcut?: any | null, intro?: string | null, color: { __typename?: 'ColorField', hex: string, red: any, green: any, blue: any }, contentContact?: { __typename?: 'DistrictModelContentContactField', value: any, blocks: Array<{ __typename: 'AudioRecord', id: any, url: string } | { __typename: 'ButtonRecord', id: any, text: string, url: string } | { __typename: 'ImageGalleryRecord', id: any, images: Array<{ __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }> } | { __typename: 'ImageRecord', id: any, layout?: string | null, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } } | { __typename: 'LogoRecord', id: any, logotypes: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height?: any | null, width?: any | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', caption?: string | null, id: any, video?: { __typename?: 'VideoField', width: any, height: any, provider: string, providerUid: string, thumbnailUrl: string, title: string, url: string } | null }> } | null, content: Array<{ __typename: 'ImageRecord' } | { __typename: 'ImageShortcutRecord', id: any, headline: string, text: string, image: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } }, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } } | { __typename: 'StartImageGalleryRecord', id: any, links: Array<{ __typename?: 'ExternalLinkRecord', id: any, title: string, url: string, linkIntro?: string | null, linkImage?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null } | { __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } } | { __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartLatestNewsRecord', id: any, count: any } | { __typename: 'StartProjectRecord', id: any, projects: Array<{ __typename?: 'ProjectRecord', _createdAt: any, _updatedAt: any, id: any, title: string, subtitle?: string | null, slug: string, intro?: string | null, colorOption: string, completed?: any | null, color: { __typename?: 'ColorField', hex: string }, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } }, subpage: Array<{ __typename?: 'ProjectSubpageRecord', _createdAt: any, _updatedAt: any, id: any, title?: string | null, subtitle?: string | null, slug: string, intro?: string | null }>, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null }> } | { __typename: 'StartSelectedDistrictNewsRecord' } | { __typename: 'StartSelectedNewsRecord', id: any, news: Array<{ __typename?: 'NewsRecord', _createdAt: any, _updatedAt: any, id: any, title: string, intro?: string | null, address?: string | null, date?: string | null, externalLink?: string | null, misc?: string | null, subtitle?: string | null, time?: string | null, where?: string | null, slug: string, image?: { __typename?: 'ImageFileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, height: any, width: any, responsiveImage: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } } | null, district: { __typename?: 'DistrictRecord', id: any, name: string, email?: string | null, subdomain: string, instagram?: string | null, facebook?: string | null, englishShortcut?: any | null, color: { __typename?: 'ColorField', hex: string } } }> } | { __typename: 'StartTextRecord', text: string, link: { __typename: 'ExternalLinkRecord', url: string, title: string } | { __typename: 'InternalLinkRecord', id: any, record: { __typename: 'AboutRecord', id: any, slug: string, title: string } | { __typename: 'NewsRecord', id: any, slug: string, title: string } | { __typename: 'ProjectRecord', id: any, slug: string, title: string } } }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };
