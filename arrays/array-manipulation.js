'use strict';

export function arrayManipulation(n, queries) {
    const arr = Array(n+1).fill(0);
    const len = queries.length;

    for (let i = 0; i < len; i++) {
        let [ from, to, val ] = queries[i];

        arr[from-1] += val;
        arr[to] -= val;
    }

    console.error(arr);

    let acc = 0;
    let sums = arr.map((value) => acc += value);

    console.error(sums);

    return sums.reduce((acc, val) => Math.max(acc, val), 0);
}
