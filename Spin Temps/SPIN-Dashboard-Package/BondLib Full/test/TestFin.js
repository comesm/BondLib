var chai = require('chai');
Bond = require('../Bond');
Attr = require('../BondAttributes');
var assert = chai.assert;
var bond = new Bond(Attr);;
describe('Bond', function() {

  it('should return bond coupon', function() {

    assert.equal(bond.getCoupon(),bond.coupon);
  });

});

describe('Bond', function() {

  it('should compute the worst date', function() {

    assert.equal(bond.getCallDate(), bond.callDate);
  });

});

describe('Bond', function() {

  it('should compute the worst date', function() {

    assert.equal(bond.numDays(bond.getMaturityDate(), bond.getCallDate()));
  });

});

