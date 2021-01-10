/**
 * Write a JavaScript function that
 * returns true if the provided predicate function returns true for all elements in a collection,
 * false otherwise.
 */

const isEveryElement = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) return false;
    }
    return true;
};

console.log(isEveryElement([1, 2, 3, 4, 5], (x) => x > 0));