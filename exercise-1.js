/**
 * Write a JavaScript program to check two numbers
 * return true if one of the number is 100
 * or if the sum of the two numbers is 100
 */
// function check(x, y) {
//     if (x === 100 || y === 1000 || x + y === 100) {
//         return true;
//     }
// }
// console.log(check(100, 0));
// console.log(check(0, 100));
// console.log(check(50, 50));
// console.log(check(10, 40));

const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(isEqualTo100(50, 30));
console.log(isEqualTo100(50, 50));
console.log(isEqualTo100(100, 30));
console.log(isEqualTo100(50, 100));