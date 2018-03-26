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
    assert.equal(
      Tobi.checkBalance(),
      'Dear Tobi, your account balance is 0 naira'
    );
    done();
  });

  it('An instance of Customer should be created', (done) => {
    Grace = new Customer('Grace', 'Clayton');
    Grace.should.be.a('object');
    assert.equal(
      Tobi.checkBalance(),
      'Dear Grace, your account balance is 0 naira'
    );
    done();
  });
});
