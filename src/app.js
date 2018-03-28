import faker from 'faker';

// const id = new WeakMap();

/**
 * @class BankAccount
 * @desc Parent class Bank
 */
class BankAccount {
  /**
   * constructor
   * @desc constructor for BankAccount class
   * @param {String} firstname firstname of the new customer
   * @param {String} lastname lastname of the new customer
   * @param {String} amount amount deposited while opening the account
   */
  constructor(firstname, lastname, amount = 0) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.balance = amount;
    this.accountNumber = faker.finance.account();
    this.id = BankAccount.genId();
    this.bankName = 'Infinity';
  }

  /**
   * genId
   * @desc generates ids for each account created
   * @return {Integer} account id
   */
  static genId() {
    this.count = (this.count || 0) + 1;
    return this.count;
  }

  /**
   * withdraw
   * @desc handles withdrawal of money
   * @param {Number} amount amount of money to withdraw
   * @return {String} message
   */
  withdraw(amount) {
    if (this.balance < amount) {
      return 'Insufficient fund';
    }
    this.balance -= amount;
    return `Withdrawal of ${amount} naira successfull. New balace is: ${this.balance} naira`;
  }

  /**
   * deposit
   * @desc handles deposit of money
   * @param {Number} amount amount of money to deposit
   * @return {String} message
   */
  deposit(amount) {
    this.balance += amount;
    return `${amount} naira deposited. New balace is: ${this.balance} naira`;
  }

  /**
   * checkBalance
   * @desc returns the customers account balance
   * @return {String} message
   */
  checkBalance() {
    return `Dear ${this.firstname}, your account balance is ${this.balance} naira`;
  }

  /**
   * accountType
   * @desc account type
   * @return {String} message
   */
  accountDetail() {
    return `Dear ${this.firstname}, you are running a ${this.accountType} account`;
  }

  /**
   * welcomeMessage
   * @desc welcomes a customer to the bank
   * @return {String} message
   */
  welcomeMessage() {
    return `Welcome to ${this.bankName} bank, how may we be of service today`;
  }

  /**
   * goodByeMessage
   * @desc says goodbye a customer
   * @return {String} message
   */
  goodByeMessage() {
    return `Thank you for banking with ${this.bankName} bank. Do have a nice day`;
  }
}

/**
 * @class SavingsAccount
 * @desc transactions available on savings account
 */
class SavingsAccount extends BankAccount {
  /**
   * constructor
   * @desc constructor for SavingsAccount class
   * @param {Array} args all arguments in super class contructor
   * @param {Integer} amount amount deposited for opening the account
   */
  constructor(...args) {
    super(...args);
    this.accountType = 'Savings';
  }

  /**
   * accountType
   * @desc account type
   * @return {String} message
   */
  accountDetail() {
    return super.accountDetail();
  }
}

/**
 * @class CurrentAccount
 * @desc transactions available on current account
 */
class CurrentAccount extends BankAccount {
  /**
   * constructor
   * @desc constructor for Current class
   * @param {Array} args all arguments in super class contructor
   * @param {Integer} amount amount deposited for opening the account
   */
  constructor(...args) {
    super(...args);
    this.accountType = 'Current';
  }

  /**
   * accountType
   * @desc account type
   * @return {String} message
   */
  accountDetail() {
    return super.accountDetail();
  }
}

const Tobi = new SavingsAccount('Tobi', 'Johnson', 1000);
const Grace = new CurrentAccount('Grace', 'Clayton');

console.log(Tobi);
console.log(Grace);

export { SavingsAccount, CurrentAccount, Tobi, Grace };
