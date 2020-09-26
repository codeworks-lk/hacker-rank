'use strict';

export function isValid(s) {

    let freq = new Map();
    let freqCountsMap = new Map();

    for (let ch of Array.from(s)) {
        let v = freq.get(ch) || 0;
        freq.set(ch, v+1);
    }

    for (let f of freq.values()) {
        let ff = freqCountsMap.get(f) || 0;
        freqCountsMap.set(f, ff+1);
    }

    let freqCounts = Array.from(freqCountsMap);

    console.log(freqCounts);

    if (freqCounts.length < 2) {
        // all letters have the same frequency
        return 'YES';
    } 
    // check if correction will help
    // we can only correct if there are no more than 2 different frequencies
    else if (freqCounts.length === 2) {
        let [ f1, c1 ] = freqCounts[0];
        let [ f2, c2 ] = freqCounts[1];
        
        // there can be only one letter with different frequency - c1 or c2 must be === 1
        // the one that has c === 1 must be either:
        // - equal to 1 - we correct the string by removing it
        // - 1 higher than the others - we can correct the string by removing one char
        if ((c2 === 1 && (f2 - 1 === f1 || f2 === 1)) || 
            (c1 === 1 && (f1 - 1 === f2 || f1 === 1))) {
                return 'YES';
        }
    }

    return 'NO';
}
