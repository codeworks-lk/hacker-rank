'use strict';

export function checkMagazine(magazine, note) {
    const index = new Map();

    magazine.map((word) => {
        let count = index.get(word) || 0;
        index.set(word, count + 1);
    });

    let answer = true;
    for (const word of note) {
        let count = index.get(word) || 0;

        if (count > 0) {
            index.set(word, count - 1);
        }
        else {
            return 'No';
        }
    };

    return 'Yes';
}
