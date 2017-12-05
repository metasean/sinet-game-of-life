/* global describe, beforeEach, it, expect */

const Math = require('../src/Math')

describe('Math', function() {
  beforeEach(function() {})

  it('1 + 1 = 2', function() {
    const result = Math.add(1, 1)
    const value = 2
    expect(result).toEqual(value)
  })

  it('40 + 2 = 42', function() {
    const result = Math.add(40, 2)
    const value = 42
    expect(result).toEqual(value)
  })
})
