import { InfoTyp } from 'utils';

export function setReputationFromReputations(data: Record<string, unknown> | null): InfoTyp {
  if (!data) return 'default';
  
  const keys: Array<InfoTyp> = ['success', 'default', 'warning', 'danger', 'error'];
  if (!keys.every(key => Object.hasOwn(data, key) && typeof data[key] === 'number')) {
    return 'default';
  }
  
  const maxScore = Math.max(...keys.map(key => data[key] as number));
  const candidates = keys.filter(key => data[key] === maxScore);
  
  if (candidates.length === 1) {
    return candidates[0];
  }
  
  return 'default';
}
