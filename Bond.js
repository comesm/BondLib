

function Bond(attributes) {
   for(var attribute in attributes) {
    this[attribute] = attributes[attribute];
   }
 }

Bond.prototype.getCoupon = function() {
  return this.coupon;
}

Bond.prototype.getWorstDate = function() {
  return getYieldToWorst() > getCoupon() ?
    getMaturity() : getCallDate();
}

Bond.prototype.callable = function() {
  return callDate !== undefined;
}

Bond.prototype.getCallDate = function() {
  return this.callDate;
}

Bond.prototype.getNextSettleDate = function() {
  return this.getNextSettleDate;
}
Bond.prototype.firstSettleDate = function() {
  return this.getNextSettleDate;
}

Bond.prototype.getMaturityDate = function() {
  return this.maturityDate;
}

Bond.prototype.getTradeDate = function() {
  return this.tradeDate;
}

Bond.prototype.numDays = function(begDate, endDate) {
    if(begDate.getDate() === 31) {
      begDate.setDate(30);
    }
    if(endDate.getDate() === 31) {
      endDate.setDate(30);
    }
    var year = endDate.getFullYear() - begDate.getFullYear();
    var month = endDate.getMonth() - begDate.getMonth();

    var day = endDate.getDate() - begDate.getDate();

    return (year + month + day) * 360

}

Bond.prototype.getYieldToWorst = function() {
    return;
}

Bond.prototype.getPrevPaymentDt = function() {
    return;
}

module.exports = Bond;