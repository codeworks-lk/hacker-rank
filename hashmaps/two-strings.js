'use strict';

export function twoStrings(s1, s2) {
    const index = new Map();
    
    for (const c of Array.from(s1)) {
        index.set(c, 1);
    }

    for (const c of Array.from(s2)) {
        if (index.has(c)) {
            return 'YES';
        }
    }

    return 'NO';
}