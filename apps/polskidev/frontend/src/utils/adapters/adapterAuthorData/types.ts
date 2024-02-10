import type { Format } from "../adapterImageData";

export type AdapterAuthorDataProps = { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, alternativeText?: string | null, formats?: Format } | null } | null } | null } | null }