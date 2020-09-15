'use strict';

export function sockMerchant(n, ar) {
    let same = new Map();

    for (let i = 0; i < n; i++) {
        let key = ar[i];
        let val = same.get(key) || 0;
        same.set(key, ++val);
    }

    let pairs = 0;
    same.forEach((value) => pairs += ~~(value / 2));
    return pairs;
}
