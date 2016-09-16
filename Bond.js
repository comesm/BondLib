


function Bond(coupon, settle, yield) {
   this.coupon = coupon;
   this.worst = this.computeWorst();
 }

Bond.prototype.getCoupon = function() {
  return this.coupon;
}

Bond.prototype.computeWorst = function() {
  //return most recent 'priced-to-date'

  return;
}

Bond.prototype.callable = function() {
  return callDate !== undefined;
}

Bond.prototype.getCallDate = function() {
  return this.callDate();
}

Bond.prototype.getSettleDate = function() {
  return this.settleDate();
}

Bond.prototype.getTradeDate = function() {
  return this.tradeDate();
}



module.exports = Bond;