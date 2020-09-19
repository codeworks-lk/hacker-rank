'use strict';

import fs from 'fs';


// fraudulent-activity-notifications-test-case-1.txt -> 633
// fraudulent-activity-notifications-test-case-2.txt -> 770

export function activityNotifications(expenditure, d) {
    const n = expenditure.length;
    let window = expenditure.slice(0, d);
    window.sort((a, b) => a - b);
    let m = getMedian(window);
    let alerts = 0;

    for (let i = d; i < n; i++) {
        if (expenditure[i] >= 2 * m) {
            // console.error(i, expenditure[i], m);
            alerts++;
        }

        let remove = expenditure[i-d];
        let removeAt = bisectSearch(window, remove);
        let insert = expenditure[i];
        let insertAt = bisectSearch(window, insert);

        // if (i === 197279 || i === 198460) {
            // console.error(i, expenditure[i], m, '!!!', window.join(','), remove, removeAt, insert, insertAt);
        // }
                
        shift(window, remove, removeAt, insert, insertAt);
        m = getMedian(window);
    }

    return alerts;
}

function shift(a, rm, rmidx, ins, insidx) {
    if (rmidx === insidx) {
        a[rmidx] = ins;
    }
    else if (rmidx < insidx) {
        for (let i = rmidx; i < insidx-1; i++) {
            a[i] = a[i+1];
        }
        a[insidx-1] = ins;
    }
    else {
        for (let i = rmidx; i > insidx; i--) {
            a[i] = a[i-1];
        }
        a[insidx] = ins;
    }

    // console.log(a.join(','));
    return a;
}

function bisectSearch(a, value) {
    const n = a.length;

    if (value <= a[0]) return 0;
    if (value > a[n-1]) return n;

    let left = 0;
    let right = n-1;
    let mid = 0;

    do {
        mid = left + Math.floor((right - left) / 2);

        if (a[mid] > value) {
            right = mid;
        }
        else if (a[mid] < value) {
            left = mid + 1;
        }
        else {
            break;
        }
    } while (left < right);

    while (mid < n && a[mid] < value) {
        mid++;
    }

    return mid;
}

function getMedian(a) {
    const n = a.length;

    if (n % 2 === 0) {
        let mid = n / 2;
        return (a[mid] + a[mid-1]) / 2;
    }
    else {
        return a[(n-1)/2];
    }
}

export function readActivityNotificationsTestCase(path) {
    

    let lines = fs.readFileSync(path).toString().split('\n');
    let d = parseInt(lines[0].split(' ')[1], 10);
    let exp = lines[1].split(' ').map(s => parseInt(s, 10));

    // exp = [8, 8, 2, 2, 2, 10];
    // d = 2;

    console.error(d, exp.length);

    // result = activityNotificationsBrute(exp, d);
    // console.log(result);

    return { exp, d };
}


export function activityNotificationsBrute(expenditure, d) {
    const n = expenditure.length;
    let alerts = 0;
    let lastPercent = 0;

    for (let i = d; i < n; i++) {
    // for (let i of [ 197279, 198460]) {
        // if (Math.floor(100*i/n) > lastPercent) {
        //     lastPercent = Math.floor(100*i/n);
        //     console.error(`${lastPercent}%`);
        // }

        let window = expenditure.slice(i-d, i).sort((a, b) => a - b);
        let m = getMedian(window);

        console.error(i, expenditure[i], m, '!!!', window.join(','));

        if (expenditure[i] >= 2 * m) {
            // console.error(i, expenditure[i], m);
            alerts++;
        }
    }

    return alerts;
}

