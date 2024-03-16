export function parserPhoneNumberPL(phoneNumber: string): string | null {
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  const cleanedNumber = digitsOnly.replace(/^(48|0048)/, '');
  if (cleanedNumber.length === 9) {
    return cleanedNumber;
  }
  return null;
}