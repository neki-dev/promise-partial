# *Partial Promise execution*
.

![Serial](https://i.ibb.co/n77YP3n/serial.png)
```javascript
for (const value of items) await someAsyncFunction(value)
```
![Parallel](https://i.ibb.co/hM5RTC5/parallel.png)
```javascript
await Promise.all(items.map(someAsyncFunction))
```
![Partial](https://i.ibb.co/J2ZcvzV/partial.png)
```javascript
await Promise.partial(items, someAsyncFunction, k)
```

* ## Install

```sh
npm i promise-partial
```

* ## Configure

```js
const PromisePartial = require('promise-partial');
PromisePartial.PART_SIZE = 1000;
```
_... or ...._
```js
require('promise-partial/polyfill');
Promise.PART_SIZE = 1000;
```

* ## Usage

```js
const PromisePartial = require('promise-partial');
await PromisePartial.map(
    items, // Array of promises values
    async (value) => { // Callback for execute promise
        await someAsyncFunction(value);
    }, 
    2 // Custom part size
);
```
_... or ...._
```js
require('promise-partial/polyfill');
await Promise.partial(
    items, // Array of promises values
    async (value) => { // Callback for execute promise
        await someAsyncFunction(value);
    }, 
    2 // Custom part size
);
```
