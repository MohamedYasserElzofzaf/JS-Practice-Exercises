/**
 * Write a JavaScript program to
 * compare two objects to determine if the first one contains the same properties as the second one
 * (which may also have additional properties).
 * For example, objA and objB are equal (but not equal to objC).
 * const objA = { a: 1, b: 1, c: 1 };
 * const objB = { a: 1, b: 1, c: 1 };
 * const objC = { a: 1, b: 1, d: 1 };
 */

const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };
const samePrope = (a, b) => Object.keys(a).every((key) => b[key]);

console.log(samePrope(objA, objB));
console.log(samePrope(objA, objC));