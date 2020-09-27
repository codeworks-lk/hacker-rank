'use strict';

const MAX = Number.MAX_SAFE_INTEGER;

export function minimumAbsoluteDifference(arr) {

    arr.sort((a,b) => a-b);

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = Math.abs(arr[i] - arr[i+1]);
    }

    return arr.reduce((min, v) => Math.min(min, v), MAX);
}

function minimumAbsoluteDifferenceBrute(arr) {
    let n = arr.length;
    let result = MAX;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                result = Math.min(result, Math.abs(arr[i] - arr[j]));
            }
        }
    }

    return result;
}

export function minimumAbsoluteDifferenceFun(arr) {
    let x = flatMap(arr, (v1, i) => arr.map((v2, j) => i !== j ? Math.abs(v1 - v2) : MAX))
    // console.log(x);
    return x.reduce((acc, v1) => Math.min(acc, v1), MAX);
}

function flatMap(arr, fun) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let subArr = fun(arr[i], i, arr);

        for (let r of subArr) {
            result.push(r);
        }
    }

    return result;
}

function flat(arr) {
    let result = [];
    arr.forEach((sub) => result = result.concat(sub));
    return result;
}