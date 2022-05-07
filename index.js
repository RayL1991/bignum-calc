// Import stylesheets
import './style.css';


const evidences = ["1.22", "333333333333333333333333333333333333333333.3333", "444444444444444444444444444444444444444444.44"]

const res = evidences[2].split(".")

const sum = evidences.reduce((acc, evid)=> {
  //console.log(acc)
  const [accVal, accFloat] = acc.split(".")

  //console.log( accVal,accFloat )


  const [val, float] = evid.split(".")

  const sumVal = BigInt(accVal)+BigInt(val)
  const sumFloat = Number("0."+accFloat) + Number("0."+ float)

  //console.log("0."+accFloat,"0."+ float,sumFloat)


  const sumFlo = sumFloat.toString().substring(1,4)
  let sumSum = sumVal
  if(sumFloat > 1){
    sumSum = sumVal + 1n
  }

  // const sumSum = sumVal + BigInt(SumInt)

  //const 

  //console.log(sumSum.toString(), sumFlo)

  const res = sumSum.toString() + sumFlo.toString()
  //console.log(res)
  return res
}, "0.0") 


const [sumInt, sumFloat] = sum.split(".")
const  calc = BigInt(sumInt)*100000000n/BigInt(123)

console.log(sum)
console.log(sumInt, sumFloat, calc.toString())

const calc2 = BigInt(sumInt)*BigInt(123)
console.log(calc2.toString())


const res2 = Math.round(123.37)

console.log(res2)
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;