import { IterateHandler } from './types';

/**
 * Default part size
 */
export const PART_SIZE = 1000;

function handleIterationPart(
  values: any[],
  handler: IterateHandler,
  offset: number = 0,
): Promise<any[]> {
  return Promise.all(
    values.map((value, index: number) => handler(value, offset + index)),
  );
}

/**
 * Partial Promise execution
 *
 * @param {Array} values - Array of promises values
 * @param {IterateHandler} handler - Callback for execute promise
 * @param {number} [cluster] - Size of part
 *
 * @returns {Array}
 */
export default async function map(
  values: any[],
  handler: IterateHandler,
  cluster: number = PART_SIZE,
): Promise<any[]> {
  if (typeof cluster !== 'number' || cluster < 1) {
    throw Error(`PromisePartial: Invalid cluster '${cluster}'`);
  }

  if (values.length <= cluster) {
    if (values.length === 0) {
      return [];
    }
    return handleIterationPart(values, handler);
  }

  let result: any[] = [];
  for (let index = 0; index < values.length; index += cluster) {
    const valuesPart = values.slice(index, index + cluster);
    result = result.concat(
      // eslint-disable-next-line no-await-in-loop
      await handleIterationPart(valuesPart, handler, index),
    );
  }

  return result;
}
