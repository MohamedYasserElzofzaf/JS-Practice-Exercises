/**
 * Write a JavaScript program to generate a random hexadecimal color code.
 */

const getrandomHex = () => Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () =>
    "#" + Array.from({ length: 6 }).map(getrandomHex).join("");

console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());