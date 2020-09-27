'use strict';

export function luckBalance(k, contests) {

    let balance = 0;

    // loose all unimportant
    balance += contests.reduce((total, [luck, important]) => important === 0 ? total + luck : total, 0);

    // get important ones
    let important = contests
        .filter(([_, important]) => important === 1)
        .map(([luck, _]) => luck)

    // sort from most luck-demanding to least
    important.sort((a, b) => b - a);

    // console.log(balance, important, k);

    // loose max number of important and win the rest
    balance += important.reduce((acc, luck, idx) => idx < k ? acc + luck : acc - luck, 0);

    return balance;
}
