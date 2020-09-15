'use strict';

export function repeatedString(s, n) {
    let aCountInString = Array.from(s).filter((x) => x === 'a').length;
    let numberOfWholeStrings = Math.floor(n / s.length);
    let remainingChars = n % s.length;
    let aCountInRemainingString = Array.from(s.substring(0, remainingChars)).filter((x) => x === 'a').length;
    let aCountInRepeatedString = aCountInString * numberOfWholeStrings + aCountInRemainingString;

    return aCountInRepeatedString;
}