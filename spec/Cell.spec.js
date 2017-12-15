/* global describe, beforeEach, it, expect */

const Cell = require('../src/Cell')

describe('Cell', function() {
  beforeEach(function() {})
  
  const cell = new Cell()

  it('exists', function() {
    expect(cell).toBeTruthy()
  })
  
  it('has a state', function() {
    console.log(cell.state)
    expect(cell.state()).toEqual(true||false)
  })
  
  it('has a false state', function() {
    cell.vacate()
    expect(cell.state()).toEqual(false)
  })
  
  it('set state', function() {
    cell.flippy()
    expect(cell.state()).toEqual(true)
  })
  
  it('flippy aint crap', function() {
    cell.flippy()
    expect(cell.state()).toEqual(false)
  })
  
  it('set state to true', function() {
    cell.setState(true)
    expect(cell.state()).toEqual(true)
  })
})
