'use strict';

export function repeatedString(s, n) {
    let aCountInString = aCount(s);
    let numberOfWholeStrings = Math.floor(n / s.length);
    let remainingChars = n % s.length;
    let aCountInRemainingString = aCount(s.substring(0, remainingChars));
    let aCountInRepeatedString = aCountInString * numberOfWholeStrings + aCountInRemainingString;

    return aCountInRepeatedString;
}

function aCount(s) { return Array.from(s).filter((char) => char === 'a').length; }