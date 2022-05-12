declare type IterateHandler<T, D> = (item: T, index: number) => D;
/**
 * Partial Promise execution
 *
 * @param {Array} values - Array of promises values
 * @param {IterateHandler} handler - Callback for execute promise
 * @param {number} [partSize] - Size of part
 *
 * @returns {Promise<Array>}
 */
export default function promisePartial<T = any, D = any>(values: T[], handler: IterateHandler<T, D>, partSize?: number): Promise<D[]>;
export {};
