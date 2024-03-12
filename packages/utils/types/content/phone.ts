import {ChunkProps} from "design-system/components/molecules/contentPartDisplay";
import {Image} from "./image";
import {Status} from './status';
import {Tag} from "./tag";

export type PhoneFull = {
    contentParts: Array<ChunkProps<Record<string, unknown>>>;
    cover: Image | null;
    createdAt: string | null;
    format: Array<Tag>;
    id: string | null;
    lead: string | null;
    phone: string | null;
    status: Status | null;
    typ: string | null;
    updatedAt: string | null;
};

export type NetworkOperatorsByID = Record<string, {
    name: string,
    createdAt: string,
    checkedManually: boolean
}>;

export type NetworkOperatorsByName = Record<string, {
    id: string,
    createdAt: string,
}>;

export type PhoneTyp = 'stationary' | 'mobile' | 'premium'

export type OperatorNumberRange = {
    operatorId: string,
    operatorName: string,
    range: number,
    typ: PhoneTyp,
    createdAt: string,
    zone?: number | null,
    zoneName?: string | null
}

export type OperatorNumbersRange = Record<string, OperatorNumberRange>;
