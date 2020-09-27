'use strict';

export function maxMin(k, arr) {
    let n = arr.length;
    const MAX = Number.MAX_SAFE_INTEGER;

    arr.sort((a,b) => a - b);

    return arr.reduce((minUnfairness, value, index, array) => Math.min(minUnfairness, index + k > n ? MAX : array[index + k - 1] - value), MAX);
}