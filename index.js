'use strict';

console.log("hello hacker-rank");

// const testCase = `
// 3
// 1 2 3`;

// let inputLines = []
// let currentLine = 0;

// inputLines = testCase
//     .split('\n')
//     .filter((v) => v !== '');

// function readLine() {
//     return inputLines[currentLine++];
// }

// const n = parseInt(readLine(), 10);
// const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

// import { sockMerchant } from './sock-merchant.js';
// const result = sockMerchant(6, [1, 2, 3, 1, 1, 2]);

// import { countingValleys } from './counting-valleys.js';
// const result = countingValleys(3, 'DUUDDDDU');

// import { repeatedString } from './repeated-string.js';
// const result = repeatedString('a', 10000000000);

import { jumpingOnClouds } from './jumping-on-clouds.js';
const result = jumpingOnClouds([0, 1, 0, 1, 0]);


console.log(result);
