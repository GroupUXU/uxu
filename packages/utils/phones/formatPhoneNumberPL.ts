

export function formatPhoneNumberPL(phone?: string): string | null {
  if (!phone) return null;
  let cleaned = phone.replace(/\D/g, '');
  
  let operatorName: string | null = null;
  // for (let [prefix, operator] of premiumPhonePrefixesMapPL) {
  //   if (cleaned.startsWith(prefix)) {
  //     operatorName = operator; // Save the operator name if a match is found
  //     break;
  //   }
  // }
  //
  if (operatorName) {
    console.log(`Operator: ${operatorName}`);
    return phone;
  }
  

  if (cleaned.length === 9) {
    return '+48 ' + cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
  } else if (cleaned.length > 9) {
    cleaned = cleaned.replace(/^(00)?48/, '');
    if (cleaned.length === 9) {
      return '+48 ' + cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    }
  }
  
  return phone;
}