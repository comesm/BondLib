//in order for analytics to function, must populate the required attributes;
var Debt = {

  coupon: 5,
  callDate: new Date(2021,2,15),
  maturityDate: new Date(12,31,2039),
  todayDate:new Date(),

  yield:undefined,
  price:undefined,

  firstSettleDate:undefined,
  nextSettleDate:undefined,
  nextPaymentDate:undefined,
  dtdDate:undefined,
  prevPaymentDate:undefined,

  parAmount:undefined,
  marketValue:undefined,
  nextPaymentAmt:undefined,

  interestAccrued: undefined
}

module.exports = Debt;