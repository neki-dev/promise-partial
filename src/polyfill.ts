import partialMap, { PART_SIZE } from './index';

/**
 * Default part size
 */
Promise.PART_SIZE = PART_SIZE;

/**
 * Partial Promise execution
 *
 * @param {Array} values - Array of promises values
 * @param {IterateHandler} handler - Callback for execute promise
 * @param {number} [cluster] - Size of part
 *
 * @returns {Array}
 */
Promise.partial = function map(values, handler, cluster = Promise.PART_SIZE) {
  return partialMap(values, handler, cluster);
};
