import { readFileSync } from 'node:fs';

export function loadCases<T>(file: URL): T[] {
  const records: unknown = JSON.parse(readFileSync(file, 'utf8'));
  if (!Array.isArray(records) || records.length < 12) throw new Error(`${file.pathname} must contain at least 12 cases`);
  const ids = records.map((record) => (record as { id?: unknown }).id);
  if (ids.some((id) => typeof id !== 'string') || new Set(ids).size !== ids.length) throw new Error(`${file.pathname} has missing or duplicate case IDs`);
  return records as T[];
}
