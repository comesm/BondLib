//in order for analytics to function, must populate the required attributes;
var Debt = {

  coupon: 5,
  callDate: new Date(2021,2,15),
  yield:undefined,
  price:undefined,
  maturityDate: new Date(12,31,2039),
  todayDate:new Date(),
  firstSettleDate:undefined,
  nextSettleDate:undefined,
  parAmount:undefined,
  marketValue:undefined,
  nextPaymentDate:undefined,
  nextPaymentAmt:undefined,
  dtdDate:undefined,
  interestAccrued: undefined
}

module.exports = Debt;