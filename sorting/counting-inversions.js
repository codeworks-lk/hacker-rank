'use strict';

import fs from 'fs';


export function countInversions(arr) {
    const n = arr.length;
    let inversions = 0;
    let merged = Array(n);

    let d = 1;
    while (d < n) {
        for (let i = 0; i < n-d; i += d*2) {
            let lside = { left: i, right: i+d-1 };
            let rside = { left: i+d, right: Math.min(i+(2*d)-1, n-1) };

            // console.log(d, arr, lside, rside);
            let { inversions: subtotal } = merge(arr, lside, rside, merged);
            inversions += subtotal;
        }

        d *= 2;
    }

    return inversions;
}


function merge(arr, lrange, rrange, merged) {
    let ln = lrange.right - lrange.left + 1;
    let rn = rrange.right - rrange.left + 1;
    let inversions = 0;

    let lmin = arr[lrange.left];
    let lmax = arr[lrange.right];
    let rmin = arr[rrange.left];
    let rmax = arr[rrange.right];

    if (lmax <= rmin) {
        // all OK! sorted 
    }
    else if (rmax <= lmin) {
        // swap all right with all left
        // copy left to merged
        for (let i = lrange.left; i <= lrange.right; i++) {
            merged[i] = arr[i];
        }
        // move right range to the left
        let arri = lrange.left;
        for (let i = rrange.left; i <= rrange.right; i++) {
            arr[arri++] = arr[i];
        }
        // save left range on the right side
        for (let i = lrange.left; i <= lrange.right; i++) {
            arr[arri++] = merged[i];
        }

        inversions += ln * rn;
    }
    else {
        // merge right with left
        let li = lrange.right;
        let ri = rrange.right;
        let mi = ln + rn - 1;

        while (ri >= rrange.left && li >= lrange.left) {
            if (arr[li] > arr[ri]) {
                inversions += ri - rrange.left + 1;
                merged[mi--] = arr[li--];
            }
            else {
                merged[mi--] = arr[ri--];
            }
        }

        while (ri >= rrange.left) {
            merged[mi--] = arr[ri--];
        }
        while (li >= lrange.left) {
            merged[mi--] = arr[li--];
        }

        // update arr
        for (let i = 0; i < ln + rn; i++) {
            arr[lrange.left + i] = merged[i];
        }
    }

    return { inversions, range: { left: lrange.left, right: rrange.right } };
}


export function countInversionsRanges(arr) {
    const n = arr.length;
    let inversions = 0;
    let merged = Array(n);
    let ranges = Array(n);

    let i = 0;
    let ri = 0;
    while (i < n) {
        let lt = i;
        let rt = i;

        while (i+1 < n && arr[i+1] >= arr[i]) {
            i++;
            rt = i;
        }

        ranges[ri++] = { left: lt, right: rt };
        i++;
    }

    const rangesLength = ri;

    console.log(arr.length, rangesLength);
    // console.log(ranges);

    for (let i = 0; i < rangesLength - 1; i++) {
        // console.log(ranges);
        // console.log(arr);
        let lside = ranges[i];
        let rside = ranges[i+1];

        let { inversions: subtotal, range: r } = merge(arr, lside, rside, merged);
        inversions += subtotal;
        ranges[i+1] = r;
    }

    // console.log(ranges);
    return inversions;
}


export function countInversionsOnplusm(arr) {
    const n = arr.length;
    let freq = [];
    let inversions = 0;

    for (let i = n-1; i >= 0; i--) {
        let v = arr[i];
        freq[v] = freq[v] || [];
        freq[v].push(i);
    }
    
    freq = freq
        .map((v, i) => {
            if (typeof v !== 'undefined') {
                return { value: i, indices: v };
            }
            else {
                return v;
            }
        })
        .filter((v) => typeof v !== 'undefined');

    let minExpectedIndex = 0;
    for (let f of freq) {
        for (let i = f.indices.length - 1; i >= 0; i--) {
            let idx = f.indices[i];
            if (idx < minExpectedIndex) {
                inversions += minExpectedIndex - idx + 1;
            }
            else {
                break;
            }
        }
        minExpectedIndex += f.indices.length;
    }

    return inversions;
}

function divideRanges(arr) {
    const n = arr.length;
    let toMerge = [];
    let inversions = 0;
    let ranges = [{ left: 0, right: n - 1 }];

    while (ranges.length > 0) {
        console.error(ranges);
        let r = ranges.shift();
        let lt = r.left;
        let rt = r.right;

        if (rt - lt > 1) {
            let split = lt + Math.floor((rt - lt)/2);
            ranges.unshift({ left: split+1, right: rt });
            ranges.unshift({ left: lt, right: split });
        }
        else if (rt - lt === 1) {
            if (arr[lt] > arr[rt]) {
                inversions++;
                let swap = arr[lt];
                arr[lt] = arr[rt];
                arr[rt] = swap;
            }
            toMerge.push(r);
        }
        else {
            toMerge.push(r);
        }
    }
}

export function countInversionsFreq(arr) {
    const n = arr.length;
    let freq = [];

    for (let i = n-1; i >= 0; i--) {
        let v = arr[i];

        updateCount(freq, v);
        updateInversions(freq, v);
    }

    return freq.reduce((acc, f) => acc += f.inversions, 0);
}

function updateInversions(freq, value) {
    let n = freq.length;
    let inversions = 0;

    for (let i = 0; i < n; i++) {
        let f = freq[i];

        if (f.value < value) {
            inversions += f.count;
        }
        else if (f.value === value) {
            f.inversions += inversions;
            break;
        }
    }
}

function updateCount(freq, value) {
    const n = freq.length;
    let inversions = 0;
    let count = 1;

    if (freq.length === 0 || value < freq[0].value) {
        freq.unshift({ value, count: 1, inversions: 0 });
    }
    else if (value > freq[n-1].value) {
        freq.push({ value, count: 1, inversions: 0 });
    }
    else {
        for (let i = 0; i < n; i++) {
            let f = freq[i];

            if (f.value === value) {
                f.count += 1;
                break;
            }
            else if (f.value > value) {
                for (let j = n; j > i; j--) {
                    freq[j] = freq[j-1];
                }
                freq[i] = { value, count: 1, inversions: 0 };
                break;
            }
        }
    }
}


export function countInversionsBrute(arr) {
    const n = arr.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let v = arr[i];
        for (let j = i+1; j < n; j++) {
            if (v > arr[j]) {
                count++;
            }
        }
    }

    return count;
}


export function readCountingInversionsTestCase(path) {
    let lines = fs.readFileSync(path).toString().split('\n');
    let n = parseInt(lines[0], 10);
    let tc = [];
    let line = 1;    

    for (let i = 0; i < n; i++) {
        line++; // skip arr length;
        let arr = lines[line++].split(' ').map((v) => parseInt(v, 10));
        tc.push(arr);
    }

    console.error(tc.map((arr) => arr.length));

    return tc;
}