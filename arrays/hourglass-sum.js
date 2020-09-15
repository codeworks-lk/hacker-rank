'use strict';

export function hourglassSum(arr) {
    let { n, m } = measure(arr);
    let h = [];

    for (let x = 0; x < n - 2; x++) {
        for (let y = 0; y < m - 2; y++) {
            h.push(getHourglass(arr, x, y));
        }
    }

    let sums = h.map(one => one.reduce((acc, v) => acc + v, 0));
    return sums.reduce((acc, v) => Math.max(acc, v), Number.MIN_SAFE_INTEGER);
}

function getHourglass(arr, x, y) {
    let top = part(arr[y], x, x + 2)
    let mid = at(arr, x+1, y+1);
    let bot = part(arr[y+2], x, x + 2)
    let h = [].concat(top).concat(mid).concat(bot);

    console.log([x, y, h]);

    return h;
}

function part(arr, start, end) {
    return arr.slice(start, end + 1);
}

function at(arr, x, y) {
    return arr[y][x];
}

function measure(arr) {
    return { n : arr[0].length, m : arr.length };
}