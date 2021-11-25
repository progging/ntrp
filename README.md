# NTRP

> Interpolate a templated string using `{{` and `}}` delimiters, and the key/values from an object.

## Install

`npm i -S ntrp` or `yarn add ntrp`

## Usage

```typescript
//Keys in both the template string and object are case-insensitive.
const str = ntrp('{{greeting}} {{GREETING}}, {{entity}}!', {
  greeting: 'Hello',
  ENTITY: 'World',
})

console.log(str) // "Hello Hello, World!"
```

## Test

`npm i && npm t`

## License

MIT
