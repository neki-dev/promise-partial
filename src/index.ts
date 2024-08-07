import { IterateHandler } from "./types";

function handleIterationPart<T, D>(
  values: T[],
  handler: IterateHandler<T, D>,
  offset: number = 0,
): Promise<D[]> {
  return Promise.all(
    values.map((value, index: number) => handler(value, offset + index)),
  );
}

/**
 * Partial Promise execution
 *
 * @param {Array} values - Array of promises values
 * @param {IterateHandler} handler - Callback for execute promise
 * @param {number} partSize - Size of part
 *
 * @returns {Promise<Array>}
 */
export default async function promisePartial<T = any, D = any>(
  values: T[],
  handler: IterateHandler<T, D>,
  partSize: number,
): Promise<D[]> {
  if (partSize < 1) {
    throw Error(`PromisePartial: Invalid size part '${partSize}'`);
  }

  if (values.length <= partSize) {
    if (values.length === 0) {
      return [];
    }

    return handleIterationPart<T, D>(values, handler);
  }

  let result: D[] = [];

  for (let index = 0; index < values.length; index += partSize) {
    const valuesPart = values.slice(index, index + partSize);
    result = result.concat(
      await handleIterationPart<T, D>(valuesPart, handler, index),
    );
  }

  return result;
}
