## Promise partial
[![Npm package version](https://badgen.net/npm/v/promise-partial)](https://npmjs.com/package/promise-partial)
[![Small size](https://badge-size.herokuapp.com/neki-dev/promise-partial/master/dist/index.js)](https://github.com/neki-dev/promise-partial/blob/master/dist/index.js)

Partial (mixed) promise execution

.

![Partial](https://i.ibb.co/J2ZcvzV/partial.png)

Array is divided on grave of group by _K_ items. Items in groups is handled in parallel. But groups themselves are called in turn
```javascript
await promisePartial(items, someAsyncFunction, K)
```
.

For example - other methods:

.

![Serial](https://i.ibb.co/n77YP3n/serial.png)

Each item of array is handled one by one. Like a simple `for`
```javascript
for (const value of items) {
    await someAsyncFunction(value)
}
```

.

![Parallel](https://i.ibb.co/hM5RTC5/parallel.png)

Each item of array is handled in parallel. Like a `Promise.all`
```javascript
await Promise.all(items.map(someAsyncFunction))
```

.

* ### Install

```sh
npm i promise-partial
```

* ### Usage

```js
promisePartial<T, D>(
    // Array of items for map
    array: T[],
    // Callback for handle of item
    callback: (item: T, index: number) => Promise<D>,
    // Part size for array dividing
    partSize: number = 1000
): Promise<D>[]:
```

* ### Example

```js
const promisePartial = require('promise-partial');

const res = await promisePartial([1, 2, 3, /* and more items */], async (v) => {
    return new Promise((resolve) => {
        // some async process
        setTimeout(() => resolve(v * 2), 100);
    });
});
```
