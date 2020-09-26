'use strict';

export function substrCount(n, s) {

    let arr = Array.from(s);
    n = arr.length;
    let count = n;


    let curr = arr[0];
    let consecutive = 1;
    let consecutiveTotal = 0;

    // sweep for consecutive letters
    for (let i = 1; i < n; i++) {
        if (arr[i] === curr) {
            consecutive++;
        }
        else {
            consecutiveTotal += (consecutive * (consecutive-1)) / 2;
            consecutive = 1;
            curr = arr[i];
        }
    }

    consecutiveTotal += (consecutive * (consecutive-1)) / 2;

    // sweep for specials like aabaa
    let lt = 0, rt = 0;
    let i = 1;
    let specialTotal = 0
    
    while (i < n-1) {
        let special = '';
        curr = arr[i];
        lt = i-1;
        rt = i+1;

        while (lt >= 0 && rt < n) {
            if (arr[lt] === arr[rt]) {
                if (special === '') {
                    special = arr[lt];

                    if (curr === special) {
                        // this is like aaa - already counted, get out
                        break;
                    }
                    else {
                        specialTotal++;
                        // console.log(s.slice(lt, rt+1))
                    }
                }
                else if (arr[lt] === special) {
                    specialTotal++;
                    // console.log(s.slice(lt, rt+1))
                }
                else {
                    break;
                }
            }
            else {
                // nothing special
                break;
            }

            lt--;
            rt++;
        }

        // jump to the right of the last special
        i++;
    }

    console.log(s);
    console.log('n', n);
    console.log('consecutive', consecutiveTotal);
    console.log('specials', specialTotal);

    return n + consecutiveTotal + specialTotal;
}