'use strict';

import { sockMerchant } from './warm-up/sock-merchant.js';
import { repeatedString } from './warm-up/repeated-string.js';
import { countingValleys } from './warm-up/counting-valleys.js';
import { jumpingOnClouds } from './warm-up/jumping-on-clouds.js';
import { hourglassSum } from './arrays/hourglass-sum.js';
import { rotLeft, rotRight } from './arrays/left-rotation.js';
import { minimumBribes } from './arrays/new-year-chaos.js';
import { minimumSwaps } from './arrays/minimum-swaps-2.js';
import { arrayManipulation } from './arrays/array-manipulation.js';
import { checkMagazine } from './hashmaps/ransom-note.js';
import { twoStrings } from './hashmaps/two-strings.js';
import { sherlockAndAnagrams } from './hashmaps/sherlock-and-anagrams.js';
import { countTriplets } from './hashmaps/count-triplets.js';
import { freqQuery } from './hashmaps/frequency-queries.js';
import { countSwaps } from './sorting/bubble-sort.js';
import { maximumToys } from './sorting/mark-and-toys.js';
import { Checker } from './sorting/comparator.js';
import { activityNotifications, readActivityNotificationsTestCase } from './sorting/fraudulent-activity-notifications.js';

console.log("hello hacker-rank");

let result = 0;



// let { exp, d } = readActivityNotificationsTestCase('sorting/fraudulent-activity-notifications-test-case-2.txt');
// result = activityNotifications(exp, d);

// result = Checker.compare({ name: 'Aa', score: 1 }, { name: 'Ab', score: 1 });

// result = maximumToys([5, 2, 1, 1, 100], 99);

// result = countSwaps([6, 12, 4]);

// result = freqQuery([ 
//     [3, 1],
//     [2, 1],
//     [3, 1],
//     [1, 1],
//     [1, 2],
//     [3, 1],
//     [2, 1],
//     [3, 1]
// ]);


// result = countTriplets(Array(100).fill(1), 1);
// 161700
// result = countTriplets([1e3, 1e6, 1e9], 1e3);
// result = countTriplets([5, 1, 2, 1, 1, 2, 4, 4, 4, 10], 2);

// result = sherlockAndAnagrams('heollo');

// result = twoStrings('hey', 'no');

// result = checkMagazine(['hello', 'you', 'fool'], ['fool']);

// result = arrayManipulation(7, [ [ 1, 4, 10 ], 
//                                 [ 2, 5, 8  ],
//                                 [ 3, 3, 2  ] ])


// result = minimumSwaps([2, 3, 4, 1]);

// result = minimumBribes([3, 2, 1]);
// 123 - 132 - 312 - 321
// result = minimumBribes([1, 2, 3, 4, 5, 6]);
// result = minimumBribes([2, 4, 3, 1, 5, 6]);
// 123456 - 213456 - 214356 - 241356 - 243156 
// result = minimumBribes([3, 4, 5, 2, 6, 1]);


// result = rotLeft([1, 2, 3], 4);
// result = rotRight([1, 2, 3], 4);
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

