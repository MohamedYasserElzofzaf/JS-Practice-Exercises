/**
 * Given a year, report if it is a leap year.
 * what's a leap year ?
 * a year, occurring once every four years,
 * which has 366 days including 29 February as an intercalary day.
 */

const isItLeapYear = (num) => (num % 4 === 0 ? true : false);

console.log(isItLeapYear(2014));
console.log(isItLeapYear(2015));
console.log(isItLeapYear(2016));
console.log(isItLeapYear(2017));
console.log(isItLeapYear(2020));