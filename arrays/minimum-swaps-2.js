'use strict';

export function minimumSwaps(arr) {
    const indices = new Map();
    const len = arr.length;
    let swaps = 0;

    for (let i = 0; i < len; i++) {
        indices.set(arr[i], i);
    }

    for (let i = 0; i < len; i++) {
        if (!inPosition(arr, i)) {
            let item = arr[i];
            let pos = indices.get(i+1);
            swap(arr, i, pos);
            swaps++;
            indices.set(i+1, i);
            indices.set(item, pos);
        }
    }

    return swaps;
}

function swap(arr, one, two) {
    let temp = arr[one];
    arr[one] = arr[two];
    arr[two] = temp;
}

function inPosition(arr, i) {
    return arr[i] - 1 === i
}
