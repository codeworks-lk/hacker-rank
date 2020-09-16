'use strict';

export function countTriplets(arr, r) {
    const triplets = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (value % (r*r) === 0) {
            increment(triplets, value / (r*r), 2);
        }
        if (value % r === 0) {
            increment(triplets, value / r, 1);
        }

        increment(triplets, value, 0);

    }

    console.error(triplets);

    return Array.from(triplets.values())
                .reduce((total, counts) => total += counts[2], 0);
}

function increment(triplets, base, index) {
    const count = triplets.get(base) || [0, 0, 0];
    count[index] += index === 0 ? 1 : count[index - 1];
    triplets.set(base, count);
}