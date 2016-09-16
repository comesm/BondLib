

function Bond(attributes) {
   for(var attribute in attributes) {
    this[attribute] = attributes[attribute];
   }
 }

Bond.prototype.getCoupon = function() {
  console.log(this.coupon);
  return this.coupon;
}

Bond.prototype.getWorstDate = function() {
  return this.getYieldToWorst() > this.getCoupon() ?
    this.getMaturity() : this.getCallDate();
}

Bond.prototype.callable = function() {
  return callDate !== undefined;
}

Bond.prototype.getCallDate = function() {
  return this.callDate;
}

Bond.prototype.getSettleDate = function() {
  return this.settleDate;
}

Bond.prototype.getMaturity = function() {
  return this.maturityDate;
}

Bond.prototype.getTradeDate = function() {
  return this.tradeDate();
}

Bond.prototype.getYieldToWorst = function() {
    return;
}

Bond.prototype.getLastPaymentDt = function() {
    return;
}

module.exports = Bond;