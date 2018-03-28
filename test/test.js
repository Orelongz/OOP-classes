import chai from 'chai';
import { SavingsAccount, CurrentAccount, Tobi, Grace } from './../src/app';

const { assert, should } = chai;
should();

describe('Test of inheritance', () => {
  it('Tobi should not be null and should have some properties', () => {
    Tobi.should.be.a('object');
    Tobi.firstname.should.equal('Tobi');
    Tobi.lastname.should.equal('Johnson');
    Tobi.accountNumber.should.be.a('string');
    Tobi.id.should.be.a('number');
    assert.equal(
      Tobi.checkBalance(),
      'Dear Tobi, your account balance is 1000 naira'
    );
    assert.equal(
      Tobi.accountType,
      'Savings'
    );
  });

  it('Grace should not be null and should have some properties', () => {
    Grace.should.be.a('object');
    Grace.firstname.should.equal('Grace');
    Grace.lastname.should.equal('Clayton');
    Grace.accountNumber.should.be.a('string');
    Grace.id.should.be.a('number');
    assert.equal(
      Grace.checkBalance(),
      'Dear Grace, your account balance is 0 naira'
    );
    assert.equal(
      Grace.accountType,
      'Current'
    );
  });

  it('Tobi should be an instance of SavingsAccount', () => {
    assert.instanceOf(
      Tobi,
      SavingsAccount,
      'Tobi is an instance of class SavingsAccount'
    );
  });

  it('Grace should be an instance of CurrentAccount', () => {
    assert.instanceOf(
      Grace,
      CurrentAccount,
      'Grace is an instance of class CurrentAccount'
    );
  });
});

describe('Test of abstraction', () => {
  it('Tobi should be able to deposit money', () => {
    const message = Tobi.deposit(2500);
    assert.equal(
      message,
      '2500 naira deposited. New balace is: 3500 naira'
    );
    assert.equal(
      Tobi.checkBalance(),
      'Dear Tobi, your account balance is 3500 naira'
    );
  });

  it('Grace should be able to deposit money', () => {
    const message = Grace.deposit(2000);
    assert.equal(
      message,
      '2000 naira deposited. New balace is: 2000 naira'
    );
    assert.equal(
      Grace.checkBalance(),
      'Dear Grace, your account balance is 2000 naira'
    );
  });

  it('Tobi should be able to withdraw money', () => {
    const message = Tobi.withdraw(1500);
    assert.equal(
      message,
      'Withdrawal of 1500 naira successfull. New balace is: 2000 naira'
    );
    assert.equal(
      Tobi.checkBalance(),
      'Dear Tobi, your account balance is 2000 naira'
    );
  });

  it('Grace should be able to withdraw money', () => {
    const message = Grace.withdraw(500);
    assert.equal(
      message,
      'Withdrawal of 500 naira successfull. New balace is: 1500 naira'
    );
    assert.equal(
      Grace.checkBalance(),
      'Dear Grace, your account balance is 1500 naira'
    );
  });

  it('Tobi should not withdraw if amount is more than money his in his account', () => {
    const message = Tobi.withdraw(2500);
    assert.equal(
      message,
      'Insufficient fund'
    );
    assert.equal(
      Tobi.checkBalance(),
      'Dear Tobi, your account balance is 2000 naira'
    );
  });

  it('Grace should not withdraw if amount is more than money his in his account', () => {
    const message = Grace.withdraw(5000);
    assert.equal(
      message,
      'Insufficient fund'
    );
    assert.equal(
      Grace.checkBalance(),
      'Dear Grace, your account balance is 1500 naira'
    );
  });
});

describe('Test of polymorphism', () => {
  it('Tobi should be operating a savings account', () => {
    const message = Tobi.accountDetail();
    assert.equal(
      message,
      'Dear Tobi, you are running a Savings account'
    );
  });

  it('Grace should be operating a current account', () => {
    const message = Grace.accountDetail();
    assert.equal(
      message,
      'Dear Grace, you are running a Current account'
    );
  });
});

describe('Test of encapsulation', () => {
  it('Grace\'s bvn should not be shown', () => {
    assert.isUndefined(
      Grace.BVN,
      'Grace\'s BVN number can not be accessed outside the CurrentAccount class'
    );
  });

  it('Grace\'s bvn can only be accessed by a method within the CurrentAccount class', () => {
    Grace.bvnNumber().should.be.a('string');
  });

  it('Tobi\'s bvn can only be accessed by a method within the savingsAccount class', () => {
    Tobi.bvnNumber().should.be.a('string');
  });
});
