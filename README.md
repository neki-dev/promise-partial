# promise-partial.js
> Partial Promise execution

## Async

* Serial
```cmd
await >--[V1]--[..]--[Vm]--> result
```
```javascript
for (const value of items) await someAsyncFunction(value)
```
* Parallel
```cmd
         |V1|
await >--|..|--> result
         |Vm|
```
```javascript
await Promise.all(items.map(someAsyncFunction))
```
* Partial
```cmd
         |V1|  |..|  |..|
await >--|..|--|..|--|..|--> result
         |Vk|  |..|  |Vm|
```
```javascript
await Promise.partial(items, someAsyncFunction, k)
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
