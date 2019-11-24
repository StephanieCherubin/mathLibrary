/* Challenge 1 GoldenRatio - Add a new property to Number that is the Golden Ratio */

const phi = (1 + Math.sqrt(5)) / 2
Number.phi = phi
module.exports.phi = phi;


// Challenge 2 
Number.prototype.round = function() {
  return Math.round(this)
}

Number.prototype.floor = function() {
  return Math.floor(this)
}

Number.prototype.ceil = function() {
  return Math.ceil(this)
}


// Challenge 3 pad(x, y) - pads Number with x 0s before, and y 0s after.
// Example: 34.801.pad(4,4) -> 0034.8010
// or Example: pad(34.801, 4,4) -> 0034.8010
const pad = (str, length) =>
  str.padStart((str.length + length), 0) +
  str.padEnd(str.length + length, 0)
console.log(pad(String(34.801), 4,4))


// Stretch Goal: Check for invalid input. If the value input is not a number or is not included the function should throw an error.
const degToRad = (deg) => {
  try {
    if (typeof deg == 'number' || deg == ' ') {
      return deg * Math.PI / 180
    } else {
      return `${deg} is not a number`
    }
  } catch(err) {
    console.error(err);    
  }
}
/* Example:
console.log(degToRad(56)) */
module.exports.degToRad = degToRad;


// Stretch Goal: Check for invalid input. If the value input is not a number or is not included the function should throw an error.
const radToDeg = (rad) => {
  try {
    if (typeof rad == 'number' || rad == ' ') {
      return rad * 180 / Math.PI
    } else {
      return `${rad} is not a number`
    }
  } catch (err) {
    console.error(err);
  }
}
/* Example:
console.log(radToDeg(89)) */
module.exports.radToDeg = radToDeg;


// Challenge 6 toDollars(amount) - Formatting money is a common task for software projects. A function could save you time in the future. The goal of this function is to take a numeric value and return a string beginning with a '$' and rounded to two decimal places.
// Example: toDollars(3.9) -> $3.909 (Note: pads with a 0)
// Stretch Goals: Create a currency formatting function that simplifies the use of: Intl.NumberFormat
// intFormat(amount, countryCode, style)
const toDollars = (amount) => {
  const numberFormat = amount.toFixed(2)
  return `$${numberFormat}`
}
/* Example:
console.log(toDollars(amount))*/
console.log(toDollars(83.9))
module.exports.toDollars = toDollars;


// tax(rate) - returns the amount with tax
const tax = (price)  => {
  const rate = 8.5
  const totalPrice = price * rate / 100 + price;
  return totalPrice;
}
/*Example
console.log(tax(400));*/
module.exports.tax = tax;


// Challenge 8 interest(total, year, rate) - Write a function that calculates the interest over time.
const calculateInterest = function (total, years, ratePercent, roundToPlaces) {
  var interestRate = ((ratePercent/100) + 1);
  return (total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
}
/*Ecample:
console.log(calculateInterest(995, 13, 2, 2)); */
module.exports.calculateInterest = calculateInterest;


// Challenge 9 mortgage(principal, numberOfPayments, interestRate).
function getMortgagePayment(startingLoanAmount, totalPayments, interestRate)
{
    let interestRatePerMonth = interestRate / 12;
    return startingLoanAmount * interestRatePerMonth * (Math.pow(1 + interestRatePerMonth, totalPayments)) / (Math.pow(1 + interestRatePerMonth, totalPayments) - 1);
}
/* Example
console.log(getMortgagePayment(100000, 60, 20)) */
module.exports.getMortgagePayment = getMortgagePayment;


// Challenge 10 intToHex(int) -> #332211
Number.prototype.hexString = function () {
  return this.toString(16)
}
const intInput = 34


// random(n) - returns an integer from 0 to n - 1
Number.prototype.random = function () {
  return Math.random(this)
}

function getRandomArbitrary(max ) {
  return Math.round(Math.random() * (max -1 ));
}
/* Example:
console.log( getRandomArbitrary(2)) */
module.exports.getRandomArbitrary = getRandomArbitrary;


// randomRange(min, max) - returns an integer between min and max
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
/* Example:
console.log(randomIntegerInRange(0, 75)); */
module.exports.randomIntegerInRange = randomIntegerInRange;


// randomColor() - Returns a random hex color
const  randomHexColor = ()  => {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}
/* Example:
console.log(randomHexColor());*/

module.exports.randomHexColor = randomHexColor;
