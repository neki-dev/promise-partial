## Promise partial
[![Npm package version](https://badgen.net/npm/v/promise-partial)](https://npmjs.com/package/promise-partial)
[![Only 32 Kb](https://badge-size.herokuapp.com/neki-dev/promise-partial/master/dist/index.js)](https://github.com/neki-dev/promise-partial/blob/master/dist/index.js)

.

![Partial](https://i.ibb.co/J2ZcvzV/partial.png)

Array is divided on grave of group by _K_ items. Items in groups is handled in parallel. But groups themselves are called in turn
```javascript
await Promise.partial(items, someAsyncFunction, K)
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

* ### Configure

```js
const PromisePartial = require('promise-partial');
PromisePartial.PART_SIZE = 1000;

// OR

require('promise-partial/dist/polyfill');
Promise.PART_SIZE = 1000;
```

* ### Usage

```js
const PromisePartial = require('promise-partial');
await PromisePartial.map(
    items, // Array of promises values
    async (value) => { // Callback for execute promise
        await someAsyncFunction(value);
    }, 
    2000 // Custom part size
);

// OR

require('promise-partial/dist/polyfill');
await Promise.partial(
    items, // Array of promises values
    async (value) => { // Callback for execute promise
        await someAsyncFunction(value);
    }, 
    2000 // Custom part size
);
```
