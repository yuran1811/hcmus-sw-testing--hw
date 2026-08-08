import { readFileSync } from 'node:fs';

export type BaseCase = {
  id: string;
  category: string;
  defectKey: string;
};

export type CaseValidator<T> = (value: unknown) => value is T;

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function hasOnlyKeys(value: Record<string, unknown>, keys: readonly string[]): boolean {
  return Object.keys(value).every((key) => keys.includes(key));
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isOneOf<T extends string>(value: unknown, values: readonly T[]): value is T {
  return typeof value === 'string' && values.includes(value as T);
}

export function loadCases<T extends BaseCase>(file: URL, feature: string, validate: CaseValidator<T>): T[] {
  let records: unknown;
  try {
    records = JSON.parse(readFileSync(file, 'utf8'));
  } catch (error) {
    throw new Error(`${feature}: unable to read valid JSON from ${file.pathname}: ${String(error)}`);
  }

  if (!Array.isArray(records)) throw new Error(`${feature}: ${file.pathname} must contain a JSON array`);
  if (records.length < 12) throw new Error(`${feature}: expected at least 12 cases, found ${records.length}`);

  records.forEach((record, index) => {
    if (!validate(record)) throw new Error(`${feature}: invalid or unknown fields in record ${index + 1}`);
  });

  const ids = records.map((record) => record.id);
  if (new Set(ids).size !== ids.length) throw new Error(`${feature}: duplicate case IDs in ${file.pathname}`);
  if (ids.some((id) => !/^TC-[A-Z-]+-\d{3}$/.test(id))) {
    throw new Error(`${feature}: every case must retain a valid HW02 test-case ID`);
  }

  return records;
}
