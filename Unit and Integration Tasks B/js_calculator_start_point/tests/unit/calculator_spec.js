var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  // ####The program should correctly perform the following tasks:

  // multiply 3x5 and get 15
  it('it should multiply values, 3 times 5 returns 15 - METHOD A', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(3));
    calculator.operatorClick(calculator.multiply(5));
    assert.strictEqual(calculator.runningTotal, 15)
  });

  it('it should multiply values, 3 times 5 returns 15 - METHOD B', function () {
    const x = 3;
    const y = 5;
    const expected = 15;
    const actual = (x * y)
    assert.strictEqual(expected, actual)
  });

  // divide 21 / 7 and get 3
  it('it should divide values, 21 divided by 7 returns 3 - METHOD A', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(21));
    calculator.operatorClick(calculator.divide(7));
    assert.strictEqual(calculator.runningTotal, 3)
  });

  it('it should divide values, 21 divided by 7 returnS 3 - METHOD B', function () {
    const x = 21;
    const y = 7;
    const expected = 3;
    const actual = (x / y)
    assert.strictEqual(expected, actual)
  });

  // add 1 + 4 and get 5
  it('it should add values, 1 added to 4 returns 5 - METHOD A', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(1));
    calculator.operatorClick(calculator.add(4));
    assert.strictEqual(calculator.runningTotal, 5)
  });

  it('it should add values, 1 added to 4 returns 5 - METHOD B', function () {
    const x = 1;
    const y = 4;
    const expected = 5;
    const actual = (x + y)
    assert.strictEqual(expected, actual)
  });

  // subtract 7 - 4 and get 3
  it('it should subtract values, 7 subtracting 4 returns 3 - METHOD A', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(7));
    calculator.operatorClick(calculator.subtract(4));
    assert.strictEqual(calculator.runningTotal, 3)
  });

  it('it should subtract values, 7 subtracting 4 returns 3 - METHOD B', function () {
    const x = 7;
    const y = 4;
    const expected = 3;
    const actual = (x - y)
    assert.strictEqual(expected, actual)
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

  // additional tests

  it('it should accept a negative value and a positive value, passing -50 plus 66 to return 16', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(-50));
    calculator.operatorClick(calculator.add(66));
    assert.strictEqual(calculator.runningTotal, 16)
  });

  it('it should accept a positive value and a negative value, passing 100 plus -50 will return 50', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(100));
    calculator.operatorClick(calculator.add(-50));
    assert.strictEqual(calculator.runningTotal, 50)
  });

  it('it should accept two negative values, passing -10 plus -1 will return -11', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(-10));
    calculator.operatorClick(calculator.add(-1));
    assert.strictEqual(calculator.runningTotal, -11)
  });

  it('it should retain the original value when zero is added', function () {
    calculator.operatorClick(calculator.add(55));
    calculator.operatorClick(calculator.add(0));
    assert.strictEqual(calculator.runningTotal, 55)
  });

  it('it should retain the original value when zero is subtracted', function () {
    calculator.operatorClick(calculator.add(55));
    calculator.operatorClick(calculator.subtract(0));
    assert.strictEqual(calculator.runningTotal, 55)
  });

  it('it should return a value multiplied by zero, as zero', function () {
    calculator.operatorClick(calculator.add(55));
    calculator.operatorClick(calculator.multiply(0));
    assert.strictEqual(calculator.runningTotal, 0)
  });

  it('it should return a value divided by zero as Infinity', function () {
    calculator.operatorClick(calculator.add(55));
    calculator.operatorClick(calculator.divide(0));
    assert.strictEqual(calculator.runningTotal, Infinity)
  });

});
