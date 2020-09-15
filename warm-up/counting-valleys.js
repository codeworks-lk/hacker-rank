'use strict';

export function countingValleys(steps, path) {
    let altChanges = Array.from(path)
        .map((value) => value === 'U' ? +1 : -1);
    let alt = 0;
    let altList = altChanges.map((change, index, list) => {
        alt += change;
        return alt;
    });
    altList = [ 0 ].concat(altList);
    let valleys = altList.filter((alt, index, altList) => alt < 0 && index > 0 && altList[index - 1] === 0);

    return valleys.length;
}
