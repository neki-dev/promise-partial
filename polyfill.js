const PromisePartial = require('./index');
Promise.PART_SIZE = PromisePartial.PART_SIZE;
Promise.partial = (values, handler, partSize = Promise.PART_SIZE) => {
    return PromisePartial.map(values, handler, partSize);
};