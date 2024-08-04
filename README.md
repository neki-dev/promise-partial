## ⚡ Promise partial
[![Version](https://badgen.net/npm/v/promise-partial)](https://npmjs.com/package/promise-partial)
[![Size](https://img.badgesize.io/neki-dev/promise-partial/master/dist/index.js)](https://github.com/neki-dev/promise-partial/blob/master/dist/index.js)
[![Build](https://github.com/neki-dev/promise-partial/actions/workflows/build.yml/badge.svg)](https://github.com/neki-dev/promise-partial/actions/workflows/build.yml)

Partial (mixed) promise execution

.

![Partial](https://i.ibb.co/J2ZcvzV/partial.png)

Array is divided on groups by _K_ items. Items in groups is handled in parallel. But groups are called in turn.
```ts
await promisePartial(items, someAsyncFunction, K)
```
.

For example - Default methods:

.

![Serial](https://i.ibb.co/n77YP3n/serial.png)

Each item of array is handled one by one. Like a simple `for`
```ts
for (const value of items) {
    await someAsyncFunction(value)
}
```

.

![Parallel](https://i.ibb.co/hM5RTC5/parallel.png)

Each item of array is handled in parallel. Like a `Promise.all`
```ts
await Promise.all(items.map(someAsyncFunction))
```

.

* ### Install

```sh
npm i promise-partial
```

* ### Usage

```ts
promisePartial<T, D>(
    // Array of items for map
    array: T[],
    // Callback for handle of item
    callback: (item: T, index: number) => Promise<D>,
    // Part size for array dividing
    partSize: number
): Promise<D>[]:
```

* ### Example

```ts
import promisePartial from 'promise-partial';

const items = [1, 2, 3, /* and more items */];
const partSize = 2;

const result = await promisePartial(items, async (value) => {
    return new Promise((resolve) => {
        // some async process
        setTimeout(() => resolve(value * 2), 100);
    });
}, partSize);
```
