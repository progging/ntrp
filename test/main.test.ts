import 'mocha'
import { expect } from 'chai'
import ntrp from '../src/main'

describe('ntrp', () => {
  it('should interpolate string', function () {
    const result = ntrp('Hello {{entity}}!', {
      entity: 'World',
    })
    expect(result).to.equal('Hello World!')
  })

  it('should not interpolate when value is not provided', function () {
    const result = ntrp('Hello {{entity}}!', {})
    expect(result).to.equal('Hello {{entity}}!')
  })

  it('should not care about case differences between placeholder and input value', function () {
    const result = ntrp('Hello {{ENTITY}}!', {
      entity: 'World',
    })
    expect(result).to.equal('Hello World!')
  })

  it('should not manipulate input value case', function () {
    const result = ntrp('Hello {{entity}}!', {})
    expect(result).to.equal('Hello {{entity}}!')
  })

  it('should support weird placeholder values and keys', function () {
    const result = ntrp('Hello {{$.3entity-!}}!', {
      '$.3entity-!': 'World',
    })
    expect(result).to.equal('Hello World!')
  })

  it('should support empty strings', function () {
    const result = ntrp('', {
      notInUse: 'Not in use',
    })
    expect(result).to.equal('')
  })
})
