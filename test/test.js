import chai from 'chai';
import { Customer } from './../src/app';

const { assert, should } = chai;
should();

let Tobi;
let Grace;

describe('', () => {
  it('An instance of Customer should be created', (done) => {
    Tobi = new Customer('Tobi', 'Johnson');
    Tobi.should.be.a('object');
    Tobi.firstname.should.equal('Tobi');
    Tobi.lastname.should.equal('Johnson');
    Tobi.should.be.a('object');
    Tobi.accountNumber.should.be.a('string');
    assert.equal(
      Tobi.checkBalance(),
      'Dear Tobi, your account balance is 0 naira'
    );
    done();
  });

  it('An instance of Customer should be created', (done) => {
    Grace = new Customer('Grace', 'Clayton');
    Grace.should.be.a('object');
    Grace.firstname.should.equal('Grace');
    Grace.lastname.should.equal('Clayton');
    Grace.accountNumber.should.be.a('string');
    assert.equal(
      Grace.checkBalance(),
      'Dear Grace, your account balance is 0 naira'
    );
    done();
  });

  it('Tobi and Grace should be an instance of Customer', (done) => {
    assert.instanceOf(
      Tobi,
      Customer,
      'Tobi is an instance of class Customer'
    );
    assert.instanceOf(
      Grace,
      Customer,
      'Tobi is an instance of class Customer'
    );
    done();
  });

  it('Customers should be assigned an account number on creation', (done) => {
    Tobi.accountNumber.should.be.a('string');
    Grace.accountNumber.should.be.a('string');
    done();
  });

  it('Test of inheritance', (done) => {
    assert.equal(
      Tobi.balance,
      Grace.balance
    );
    assert.equal(
      typeof Tobi.accountNumber,
      typeof Grace.accountNumber
    );
    assert.equal(
      Tobi.bankName,
      Grace.bankName
    );
    done();
  });

  it('Test of polymorphism', (done) => {
    assert.notEqual(
      Tobi.firstname,
      Grace.firstname
    );
    assert.notEqual(
      Tobi.lastname,
      Grace.lastname
    );
    assert.notEqual(
      Tobi.accountNumber,
      Grace.accountNumber
    );
    done();
  });

  it('Instances of customer should have access to base class methods', (done) => {
    assert.equal(
      Tobi.welcomeMessage(),
      'Welcome to Infinity bank, how may we be of service today'
    );
    assert.equal(
      Grace.welcomeMessage(),
      'Welcome to Infinity bank, how may we be of service today'
    );
    done();
  });

  it('Customer should be able to deposit into their account', (done) => {
    const message = Tobi.deposit(500);
    assert.equal(
      message,
      '500 naira deposited. New balace is: 500 naira'
    );
    assert.equal(
      Tobi.checkBalance(),
      'Dear Tobi, your account balance is 500 naira'
    );
    done();
  });

  it('Customer should not be able to withdraw if amount is greater than account balance', (done) => {
    const message = Tobi.withdraw(1000);
    assert.equal(
      message,
      'Insufficient fund'
    );
    assert.equal(
      Tobi.checkBalance(),
      'Dear Tobi, your account balance is 500 naira'
    );
    done();
  });

  it('Customer should able to withdraw if amount is less than or equal to account balance', (done) => {
    const message = Tobi.withdraw(300);
    assert.equal(
      message,
      'Withdraw of 300 naira successfull. New balace is: 200 naira'
    );
    assert.equal(
      Tobi.checkBalance(),
      'Dear Tobi, your account balance is 200 naira'
    );
    done();
  });

  it('Customers should be able to access goodbyeMessage in base class', (done) => {
    assert.equal(
      Tobi.goodByeMessage(),
      'Thanks for banking with Infinity bank. Do have a nice day'
    );
    assert.equal(
      Tobi.goodByeMessage(),
      'Thanks for banking with Infinity bank. Do have a nice day'
    );
    done();
  });
});
