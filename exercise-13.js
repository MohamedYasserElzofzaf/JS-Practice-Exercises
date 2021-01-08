/**
 * Write a JavaScript program to
 * check whether a given array of integers is sorted in ascending order
 */

const isAscending = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] > arr[i]) return false;
    }
    return true;
};

console.log(isAscending([1, 3, 4, 5, 8, 9, 33, 56, 78]));
console.log(isAscending([1, 93, 44, 25, 67, 0, 3, 45, 8]));
console.log(isAscending([90, 45, 24, 19, 15, 7, 3, 1]));