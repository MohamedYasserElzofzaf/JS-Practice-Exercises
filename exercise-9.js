/**
 * Given two values,
 *  write a JavaScript program to
 *  find out which one is nearest to 100
 */

const near100 = (a, b) => (a < b ? b : a);
console.log(near100(45, 90));
console.log(near100(95, 90));