const PromisePartial = require('./index');

// Default part size
Promise.PART_SIZE = PromisePartial.PART_SIZE;

/**
 * Partial Promise execution
 *
 * @param {Array} values - Array of promises values
 * @param {function} handler - Callback for execute promise
 * @param {number} [cluster] - Size of part
 *
 * @returns {Array}
 */
Promise.partial = (values, handler, cluster = Promise.PART_SIZE) => {
    return PromisePartial.map(values, handler, cluster);
};