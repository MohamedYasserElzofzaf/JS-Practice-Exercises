/**
 * Write a JavaScript program to
 * find the number of even digits in a an array of integers
 */

// method
const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

// another method
const findeven = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            counter++;
        }
    }
    return counter;
};

console.log(findeven([23, 74, 344, 22, 8, 67]));
console.log(countEvenNumbers([23, 74, 344, 22, 8, 67]));