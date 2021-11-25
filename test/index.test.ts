import { describe, expect } from '@jest/globals'
import { ntrp } from '../src'

describe('ntrp', () => {
  it('should interpolate string', () => {
    const result = ntrp('Hello {{entity}}!', {
      entity: 'World',
    })
    expect(result).toBe('Hello World!')
  })

  it('should interpolate string, with multiple occurrences of target', () => {
    const result = ntrp('{{greeting}} {{greeting}}, World!', {
      greeting: 'Hello',
    })
    expect(result).toBe('Hello Hello, World!')
  })

  test('ignores case for matching template string to object key', () => {
    const result = ntrp('Hello {{ENTITY}}!', {
      entity: 'World',
    })
    expect(result).toBe('Hello World!')
  })

  test('ignores case for matching object key to template string', () => {
    const result = ntrp('Hello {{entity}}!', {
      ENTITY: 'World',
    })
    expect(result).toBe('Hello World!')
  })

  test('should not manipulate input value case', () => {
    const result = ntrp('HellO {{entity}}!', {})
    expect(result).toBe('HellO {{entity}}!')
  })

  test('should support weird placeholder values and keys', () => {
    const result = ntrp('Hello {{$.3entity-!}}!', {
      '$.3entity-!': 'World',
    })
    expect(result).toBe('Hello World!')
  })

  test('should support empty strings', () => {
    const result = ntrp('', {
      notInUse: 'Not in use',
    })
    expect(result).toBe('')
  })
})
