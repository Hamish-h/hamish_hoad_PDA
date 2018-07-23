var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."

  // it should connect to the html page
  it('it should connect to the html page (local host)', function () {
    browser.get('http://localhost:3000')
  });

  // Do the number buttons work to update the display of the running total ? 

  it('should have working number buttons', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1234567890')
  })

  it('it should have a working 1 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  it('it should have a working 2 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('it should have a working 3 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('it should have a working 4 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('it should have a working 5 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('it should have a working 6 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  it('it should have a working 7 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })

  it('it should have a working 8 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('it should have a working 9 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })

  it('it should have a working 0 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  })

  // Do each of the arithmetical operations work to update the display with the result of the operation ? 

  it('it should add values', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  })










  // Can we chain multiple operations together ? 


  // Does it work as expected for a range of numbers ? (positive, negative, decimals, large numbers) 




  //What does the code do in exceptional circumstances ? 

  //If you divide by zero, what is the effect ? 


  // Can you write a test to describe what you'd prefer to happen under this circumstance, 
  // and then correct to code to make that test pass.










});