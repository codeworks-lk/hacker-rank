'use strict';

export function rotLeft(arr, dist) {
    const len = arr.length;
    return arr.map((val, i, array) => array[(i + dist) % len]);
}

export function rotRight(arr, dist) {
    const len = arr.length;
    return arr.map((val, i, array) => array[(i + len - (dist % len)) % len])
}