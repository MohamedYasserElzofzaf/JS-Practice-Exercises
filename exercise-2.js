/**
 * Write a JavaScript exercise to get the extension of a filename.
 */
const getExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getExtension("index.html"));
console.log(getExtension("index.css"));