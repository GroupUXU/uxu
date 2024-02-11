export function checkIsDOM(callBack: () => void): void {
  if (typeof document !== 'undefined') {
    callBack();
  }
}
