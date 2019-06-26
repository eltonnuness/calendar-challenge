const y = require('./lib/year.js');

const inputYear = 2019;
const inputMonth = "June";
const inputDay = 25;

const todayYear = y.instanceYear(inputYear);

console.log(JSON.stringify(todayYear));





