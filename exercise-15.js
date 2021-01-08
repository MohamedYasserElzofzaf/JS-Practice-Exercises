/**
 * Write a JavaScript program to
 * replace the first digit in a string (should contain at least one digit)
 * with a $ character.
 */

const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");

console.log(replaceFirstDigit("asgyy3274hjndb"));
console.log(replaceFirstDigit("1232429kcdjn"));
console.log(replaceFirstDigit("A23dfdn32"));