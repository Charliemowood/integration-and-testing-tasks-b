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

  it('it can add 7', function(){
    calculator.add(7)
    assert.equal(7, calculator.runningTotal)
  })

  it('it can subtract 10', function(){
    calculator.subtract(10)
    assert.equal(-10, calculator.runningTotal)
  })

  it('it can subtract 7', function(){
    calculator.subtract(7)
    assert.equal(-7, calculator.runningTotal)
  })

  it('it can multiply', function(){
    calculator.multiply(12)
    assert.equal(0, calculator.runningTotal)
  })

  it('it can divide', function(){
    calculator.divide(7)
    assert.equal(0, calculator.runningTotal)
  })

  it('it can number click', function(){
    calculator.numberClick(4)
    assert.equal(4, calculator.runningTotal)
  })

  it('it can click operator', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(6, calculator.runningTotal)
  })

  it('it can clear', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })





});
