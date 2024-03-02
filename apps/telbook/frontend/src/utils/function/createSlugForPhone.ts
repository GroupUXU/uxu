export function createSlugForPhone(phone: string, id: string): string {
 return `/p/${id}/${phone.replace(/\s+/g, '')}`
}
