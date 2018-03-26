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
});
