import { Status } from 'utils';

export function setReputationFromReputations(data: Record<string, number> | null): Status {
  if (!data) return 'default';

  const keys: Array<Status> = ['success', 'default', 'warning', 'danger', 'error'];
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
