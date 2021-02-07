const PromisePartial = require('./index');
Promise.PART_SIZE = 1000;
Promise.partial = (values, handler, partSize) => {
    return PromisePartial.map(values, handler, partSize || Promise.PART_SIZE);
};