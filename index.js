// Import stylesheets
import './style.css';
import Big from 'big.js';

const evidences = [
  '1.22',
  '333333333333333333333333333333333333333333.3333',
  '444444444444444444444444444444444444444444.44',
];

let operator = '+';
const testArray = ['123', '345', '678'];
const taxRate = 0.5;
const fxRate = 1.5;

// const isLargeNumber = (val) =>{
//   return Number(val) > Number.MAX_SAFE_INTEGER
// }

// console.log(evidences.find(isLargeNumber) === undefined, testArray.find((val) => Number(val) > Number.MAX_SAFE_INTEGER) === undefined  )
// 1. check adn then add tehn together
// console.log(Big('1232322.45567767676').toFixed(4))
// if (evidences.find((val) => Number(val) >= Number.MAX_SAFE_INTEGER)) {
//   console.log('sucess');
// }

// const totalEvidenceAmount = evidences.reduce((acc, evid) => {
  
//   return Big(acc).plus(Big(evid));
// }, '0.0');

//console.log(totalEvidenceAmount.toFixed());
//const res = totalEvidenceAmount.minus(totalEvidenceAmount.div(1 + Math.abs(taxRate))).toFixed(3)

//console.log('-'+res)

//console.log(sumEvd.times(1.5).toFixed())
//console.log(typeof sumEvd.times(1.5))

// const sumBig = new Big(sumEvd);

// console.log(sumBig.div(1.4).toFixed());

// BigNumber.set({ DECIMAL_PLACES: 2 });

// let val = new BigNumber(sumEvd).dividedBy(taxRate);
// //val  = val.multipliedBy(fxRate)
// console.log(typeof val, val.toFixed());

//const [sumInt, sumFloat] = sum.split(".")
// const  calc = BigInt(sumInt)*100000000n/BigInt(123)

// console.log(sum)
// console.log(sumInt, sumFloat, calc.toString())

// const calc2 = BigInt(sumInt)*BigInt(123)
// console.log(calc2.toString())

// const res2 = Math.round(123.37);

// console.log(typeof res2 === 'number');


function getLargeNumberAccuracyTest (taxRate, fxRate, evidences, sampleAmount){

  const totalEvidenceAmount = evidences.reduce((acc, evid) => {
  
    return Big(acc).plus(Big(evid));
  }, '0.0');

  const recordedAmount = sampleAmount ? Big(sampleAmount) : Big(0)

  let taxAmount = totalEvidenceAmount.minus(totalEvidenceAmount.div(1 + Math.abs(taxRate))).toFixed(2)
  if (taxRate < 0) {
    taxAmount = '-' + taxAmount
  }
  const amountAfterTaxAdjustment = totalEvidenceAmount.plus(Big(taxAmount)).toFixed(2)
  const evidenceAmount = Big(amountAfterTaxAdjustment).times(fxRate).toFixed(2)
  const variance = recordedAmount.minus(Big(evidenceAmount)).toFixed(2)
  const isIncorrect = Math.abs(Number(variance)) >= 1

  return {
    evidenceAmount, taxRate, fxRate, taxAmount, recordedAmount: recordedAmount.toFixed(2), amountAfterTaxAdjustment, totalEvidenceAmount: totalEvidenceAmount.toFixed(2), variance, isIncorrect,
  }
}

const sample = '333333333333333333333333333333333333333333.33'
const res = getLargeNumberAccuracyTest(taxRate,fxRate,evidences,sample )
console.log(res)

console.log(typeof res.totalEvidenceAmount)
console.log(Number(''|| 3))
//
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
