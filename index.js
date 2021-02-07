// Default part size
let PART_SIZE = 1000;

/**
 * Partial Promise execution
 *
 * @param {Array} values - Array of promises values
 * @param {function} handler - Callback for execute promise
 * @param {number} [partSize] - Part size
 *
 * @return {Array}
 */
const map = async (values, handler, partSize= PART_SIZE) => {

    values = [...values];

    let result = [];
    while (values.length) {
        const part = values.splice(0, partSize);
        result = result.concat(
            await Promise.all(part.map((w) => handler(w)))
        );
    }

    return result;

};

module.exports = {map, PART_SIZE};