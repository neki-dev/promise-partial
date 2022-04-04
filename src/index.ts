type IterateHandler<T, D> = (item: T, index: number) => D;

const DEFAULT_PART_SIZE = 1000;

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
 * @param {number} [partSize] - Size of part
 *
 * @returns {Array}
 */
async function promisePartial<T = any, D = any>(
  values: T[],
  handler: IterateHandler<T, D>,
  partSize: number = DEFAULT_PART_SIZE,
): Promise<D[]> {
  if (typeof partSize !== 'number' || partSize < 1) {
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
      // eslint-disable-next-line no-await-in-loop
      await handleIterationPart<T, D>(valuesPart, handler, index),
    );
  }

  return result;
}

// export for commonjs
// @ts-ignore
export = promisePartial;
