var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  // ####The program should correctly perform the following tasks:

  // multiply 3x5 and get 15
  it('it should multiply values, 3 times 5 returns 15', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(3));
    calculator.operatorClick(calculator.multiply(5));
    assert.strictEqual(calculator.runningTotal, 15)
  });

  // divide 21 / 7 and get 3
  it('it should divide values, 21 divided by 7 returns 3', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(21));
    calculator.operatorClick(calculator.divide(7));
    assert.strictEqual(calculator.runningTotal, 3)
  });

  // add 1 + 4 and get 5
  it('it should add values, 1 added to 4 returns 5', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(1));
    calculator.operatorClick(calculator.add(4));
    assert.strictEqual(calculator.runningTotal, 5)
  });

  // subtract 7 - 4 and get 3
  it('it should subtract values, 7 subtracting 4 returns 3', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(7));
    calculator.operatorClick(calculator.subtract(4));
    assert.strictEqual(calculator.runningTotal, 3)
  });

  // concatenate multiple number button clicks
  it('it should concatenate multiple number button clicks', function () {
    calculator.previousTotal = 0;
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 12345)
  });

  // chain multiple operations together 
  it('it should chain multiple operations together', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(10));
    calculator.operatorClick(calculator.multiply(70));
    calculator.operatorClick(calculator.divide(2));
    calculator.operatorClick(calculator.subtract(8));
    calculator.operatorClick(calculator.add(758));
    assert.strictEqual(calculator.runningTotal, 1100)
  });

  // clear the running total without affecting the calculation
  it('it should clear the running total without affecting the calculation', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(5));
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.operatorClick(calculator.add(5));
    assert.strictEqual(calculator.runningTotal, 10)
  });

});
