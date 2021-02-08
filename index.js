/**
 * Partial Promise execution
 *
 * @param {Array} values - Array of promises values
 * @param {function} handler - Callback for execute promise
 * @param {number} [cluster] - Size of part
 *
 * @return {Array}
 */
const map = async (values, handler, cluster = PART_SIZE) => {

    if (typeof cluster != 'number' || cluster < 1) {
        throw Error('PromisePartial: Invalid size of part (cluster)');
    }

    if (values.length <= cluster) {
        if (values.length === 0) {
            return [];
        } else {
            return await handlePart(values, handler);
        }
    }

    let result = [];
    for (let p = 0; p < values.length; p += cluster) {
        const part = values.slice(p, p + cluster);
        result = result.concat(
            await handlePart(part, handler, p)
        );
    }

    return result;

};

// Execution part of Promises
const handlePart = (values, handler, offset = 0) => {
    return Promise.all(
        values.map((value, index) => handler(value, offset + index))
    );
};

// Default part size
let PART_SIZE = 1000;

module.exports = {map, PART_SIZE};