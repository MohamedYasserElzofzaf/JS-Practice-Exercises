/**
 * Write a JavaScript program to
 *  get the largest even number from an array of integers.
 */

// const getLargest = (arr) => {
//     const returnArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             returnArray.push(i);
//         }
//     }
//     const largeEven = Math.max(...returnArray);
//     return largeEven;
// };

// console.log(getLargest([56, 23, 44, 99, 88]));

const largestEven = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEven([23, 45, 56, 88, 99, 345, 87]));