var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  // ####The program should correctly perform the following tasks:

  // multiply 3x5 and get 15
  it('it should multiply values, 3 times 5 to return 15', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(3));
    calculator.operatorClick(calculator.multiply(5));
    assert.strictEqual(calculator.runningTotal, 15)
  });

  // divide 21 / 7 and get 3
  it('it should divide values, 21 divided by 7 to return 3', function () {
    calculator.previousTotal = 0;
    calculator.operatorClick(calculator.add(21));
    calculator.operatorClick(calculator.divide(7));
    assert.strictEqual(calculator.runningTotal, 3)
  });



});
