var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add 10', function(){
    calculator.add(10)
    assert.equal(10, calculator.runningTotal)
  })

  xit('it can subtract', function(){
    assert.equal(true, true)
  })

  xit('it can multiply', function(){
    assert.equal(true, true)
  })

  xit('it can devide', function(){
    assert.equal(true, true)
  })

  xit('it can number click', function(){
    assert.equal(true, true)
  })

  xit('it can click operator', function(){
    assert.equal(true, true)
  })

  xit('it can clear', function(){
    assert.equal(true, true)
  })





});