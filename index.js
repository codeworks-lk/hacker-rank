'use strict';

import { sockMerchant } from './warm-up/sock-merchant.js';
import { repeatedString } from './warm-up/repeated-string.js';
import { countingValleys } from './warm-up/counting-valleys.js';
import { jumpingOnClouds } from './warm-up/jumping-on-clouds.js';
import { hourglassSum } from './arrays/hourglass-sum.js';
import { rotLeft, rotRight } from './arrays/left-rotation.js';

console.log("hello hacker-rank");

let result = 0;

result = rotLeft([1, 2, 3], 4);
result = rotRight([1, 2, 3], 4);

// result = hourglassSum([
//     [-9, -9, -9,  1,  1,  1],
//     [ 0, -9,  0,  4,  3,  2],
//     [-9, -9, -9,  1,  2,  3],
//     [ 0,  0,  8,  6,  6,  0],
//     [ 0,  0,  0, -2,  0,  0],
//     [ 0,  0,  1,  2,  4,  0],
// ]);
// result = sockMerchant(6, [1, 2, 3, 1, 1, 2]);
// result = countingValleys(3, 'DUUDDDDU');
// result = repeatedString('a', 10000000000);
// result = jumpingOnClouds([0, 1, 0, 1, 0]);

console.log(result);


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