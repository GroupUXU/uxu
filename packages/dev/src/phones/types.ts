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