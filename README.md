# NTRP

> Interpolate a templated string using `{{` and `}}` delimiters, and the key/values from an object.

## Install

`npm i -S ntrp` or `yarn add ntrp`

## Usage

### Basic

```typescript
//Keys in both the template string and object are case-insensitive.
const str = ntrp('{{greeting}} {{GREETING}}, {{entity}}!', {
  greeting: 'Hello',
  ENTITY: 'World',
})

console.log(str) // "Hello Hello, World!"
```

### Non-present values

```typescript
import { ntrp } from 'ntrp'

//If the dictionary contains keys that are not present in the template string, they are ignored:
const str = ntrp('{{entity}}!', {
  greeting: 'Hello',
  entity: 'World',
})

//

//If the dictionary does not contain keys that are present in the template string, an error is thrown:
const str = ntrp('Around the {{entity}}', {
  greeting: 'Hello',
})

//Error is thrown: "Key {{entity}} was expected in the template string, but was not found in the dictionary!"
```

## Test

`npm i && npm t`

## License

MIT
