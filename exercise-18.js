/**
 * Write a JavaScript program
 * to convert a comma-separated values (CSV) string to a 2D array.
 * A new line indicates a new row in the array. Example input:
 * abc,def,ghi
 * jkl,mno,pqr
 * stu,vwx,yza
 */

const parseCSV = (csvString) =>
    csvString.split("\n").map((raw) => raw.split(","));

const srt;
/** = 'abc,def,ghi 
jkl, mno, pqr
stu, vwx, yza '*/

console.log(parseCSV(srt));