export const phoneNumberRangeMapData = new Map<number, {
    operatorId: number,
    operatorName: string,
    numberingRange: number,
    typ: 'stationary' | 'mobile' | 'premium',
    createdAt: string,
    zone?: number,
    zoneName?: string
}>([]);
