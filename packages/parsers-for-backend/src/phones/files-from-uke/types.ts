export type NetworkOperatorsListPLByID = Record<string, {
    name: string,
    createdAt: string,
    checkedManually: boolean
}>;

export type NetworkOperatorsListPLByName = Record<string, {
    id: string,
    createdAt: string,
}>;

export type PhoneTyp = 'stationary' | 'mobile' | 'premium'

export type NetworkOperatorNumberRange = {
    operatorId: string,
    operatorName: string,
    range: number,
    typ: PhoneTyp,
    createdAt: string,
    zone?: number | null,
    zoneName?: string | null
}

export type NetworkOperatorNumbersRange = Record<string, NetworkOperatorNumberRange>;
