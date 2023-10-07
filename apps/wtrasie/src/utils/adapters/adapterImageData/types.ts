export type Format = {
  ext?: string | null;
  url?: string | null;
  hash?: string | null;
  mime?: string | null;
  name?: string | null;
  path?: string | null;
  size?: number | null;
  width?: number | null;
  height?: number | null;
}

export type AdapterSrcImageDataProps = {
  attributes: {
    url?: string | null;
  }
}


export type AdapterImageDataProps = {
  image?: { __typename?: 'UploadFile', url: string, caption?: string | null, alternativeText?: string | null, formats?: Format } | null;
  typeImg: 'thumbnail' | 'small' | 'medium' | 'large' | 'url';
}