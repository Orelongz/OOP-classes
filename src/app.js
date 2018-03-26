import faker from 'faker';

/**
 * @class Bank
 * @desc Parent class Bank
 */
class Bank {
  /**
   * constructor
   * @desc constructor for bank class
   * @param {String} bankName the name of the bank
   */
  constructor() {
    this.bankName = 'Infinity';
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
    return `Thanks for banking with ${this.bankName} bank. Do have a nice day`;
  }
}

/**
 * @class Customer
 * @desc transactions that could be done by a customer
 */
class Customer extends Bank {
  /**
   * constructor
   * @desc constructor for phone class
   * @param {String} firstname firstname of the new customer
   * @param {String} lastname lastname of the new customer
   */
  constructor(firstname, lastname) {
    super();
    this.firstname = firstname;
    this.lastname = lastname;
    this.balance = 0;
    this.accountNumber = Customer.genAccount();
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
    return `Withdraw of ${amount} naira successfull. New balace is: ${this.balance} naira`;
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
   * @param {Number} amount amount of money to deposit
   * @return {String} message
   */
  checkBalance() {
    return `Dear ${this.firstname}, your account balance is ${this.balance} naira`;
  }

  /**
   * genAccount
   * @desc generates account number for customers
   * @return {String} bank account
   */
  static genAccount() {
    return faker.finance.account();
  }
}

console.log(new Customer());

export { Bank, Customer };
