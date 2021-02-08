const PromisePartial = require('./index');
Promise.PART_SIZE = PromisePartial.PART_SIZE;
Promise.partial = (values, handler, cluster = Promise.PART_SIZE) => {
    return PromisePartial.map(values, handler, cluster);
};