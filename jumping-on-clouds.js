'use strict';

export function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    let n = c.length;

    while (i < n - 1) {
        if (i + 2 > n - 1 || c[i + 2] === 1) {
            i += 1;
        } else {
            i += 2;
        }
        jumps++;
    }

    return jumps;
}
