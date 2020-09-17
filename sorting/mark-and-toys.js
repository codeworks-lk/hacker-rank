'use strict';

export function maximumToys(prices, k) {
    let acc = 0;
    return prices
        .sort((a, b) => a - b)
        .map((val) => acc += val)
        .filter((sum) => sum <= k)
        .length;
}