'use strict';

export function makeAnagram(a, b) {
    let afreq = getFreq(a);
    let bfreq = getFreq(b)
    let del = 0;
    let res = new Map();

    for (let [key, value] of afreq.entries()) {
        res.set(key, { af: value, bf: 0 });
    }

    for (let [key, value] of bfreq.entries()) {
        let e = res.get(key) || { af: 0 };
        e.bf = value;
        res.set(key, e);
    }

    for (let r of res.values()) {
        del += Math.abs(r.af - r.bf);
    }

    console.log(res);

    return del;
}

function getFreq(s) {
    let freq = new Map();

    for (let ch of Array.from(s)) {
        let f = freq.get(ch) || 0;
        freq.set(ch, f+1);
    }

    return freq;
}