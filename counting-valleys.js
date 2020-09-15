'use strict';

export function countingValleys(steps, path) {
    let alt = 0;
    let valleys = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'D') {
            if (alt === 0) {
                valleys++;
            }
            alt--;
        }
        else if (path[i] === 'U') {
            alt++;
        }
    }

    return valleys;
}
