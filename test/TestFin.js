var chai = require('chai');
Bond = require('../Bond');

var assert = chai.assert;
var bond = new Bond(5);
describe('Bond', function() {

  it('should return bond coupon', function() {

    assert.equal(bond.getCoupon(),5);
  });

});

describe('Bond', function() {

  it('should compute the worst date', function() {

    assert.equal(bond.computeWorst(),44);
  });

});