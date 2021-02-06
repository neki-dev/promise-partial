# promise-partial.js
> Partial Promise execution

## Async

* Consistently
```css
AWAIT |--[V1]--[..]--[Vmax]--| RESULT
```
```javascript
for (const value of items) await someAsyncFunction(value)
```
* Parallel
```css
         | V1 |
AWAIT |--| .. |--| RESULT
         |Vmax|
```
```javascript
await Promise.all(items.map(someAsyncFunction))
```
* Partial
```css
         | V1 |  |Vn+1|  | .. |
AWAIT |--| .. |--| .. |--| .. |--| RESULT
         | Vn |  | .. |  |Vmax|
```
```javascript
await Promise.partial(items, someAsyncFunction, n)
```

## Install

```sh
npm i promise-partial
```

## Configure

```js
Promise.PROMISE_PART_SIZE = 1000; // Default part size
```

## Usage

```js
const items = [100, 200, 300];
await Promise.partial(
    items, // Array of promises values
    async (value) => { // Callback for execute promise
        await someAsyncFunction(value);
    }, 
    2 // Custom part size
);
```