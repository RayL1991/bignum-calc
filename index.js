// Import stylesheets
import './style.css';
import BigNumber from 'bignumber.js';

const evidences = [
  '1.22',
  '333333333333333333333333333333333333333333.3333',
  '444444444444444444444444444444444444444444.44',
];

let operator = '+';
const testArray = ['123', '345', '678'];
const taxRate = 1.5;
const fxRate = 1.5;

// const isLargeNumber = (val) =>{
//   return Number(val) > Number.MAX_SAFE_INTEGER
// }

// console.log(evidences.find(isLargeNumber) === undefined, testArray.find((val) => Number(val) > Number.MAX_SAFE_INTEGER) === undefined  )
// 1. check adn then add tehn together

if (evidences.find((val) => Number(val) > Number.MAX_SAFE_INTEGER)) {
  console.log('sucess');
}

const sumEvd = evidences.reduce((acc, evid) => {
  const [accInt, accFloat] = acc.split('.');

  const [evdInt, evdFloat] = evid.split('.');

  // 2.check the operator '+' or '-'
  let sumInt, sumFloat;
  // opertaor
  if (operator == '+') {
    sumInt = BigInt(accInt) + BigInt(evdInt);

    if (accInt.includes('-')) {
      sumFloat = Number('-' + '0.' + accFloat) + Number('0.' + evdFloat);
    } else {
      sumFloat = Number('0.' + accFloat) + Number('0.' + evdFloat);
    }
    // opertaor '-'
  } else if (operator == '-') {
    sumInt = BigInt(accInt) - BigInt(evdInt);

    if (accInt.includes('-')) {
      sumFloat = Number('-' + '0.' + accFloat) - Number('0.' + evdFloat);
    } else {
      sumFloat = Number('0.' + accFloat) - Number('0.' + evdFloat);
    }
  }
  let res;
  if (sumInt.toString().includes('-')) {
    if (sumFloat < 0) {
      res = sumInt.toString() + sumFloat.toString().substring(2);
    } else {
      res = (sumInt + 1n).toString() + (1 - sumFloat).toString().substring(1);
    }
  } else {
    if (sumFloat > 0) {
      res = sumInt.toString() + sumFloat.toString().substring(1);
    } else {
      res = (sumInt - 1n).toString() + (1 + sumFloat).toString().substring(1);
    }
  }

  //console.log(res)
  return res;
}, '0.0');

console.log(sumEvd);

const sumBig = new BigNumber(sumEvd);

console.log(sumBig.div(1.4).toFixed());

BigNumber.set({ DECIMAL_PLACES: 2 });

let val = new BigNumber(sumEvd).dividedBy(taxRate);
//val  = val.multipliedBy(fxRate)
console.log(typeof val, val.toFixed());

//const [sumInt, sumFloat] = sum.split(".")
// const  calc = BigInt(sumInt)*100000000n/BigInt(123)

// console.log(sum)
// console.log(sumInt, sumFloat, calc.toString())

// const calc2 = BigInt(sumInt)*BigInt(123)
// console.log(calc2.toString())

const res2 = Math.round(123.37);

console.log(typeof res2 === 'number');
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
