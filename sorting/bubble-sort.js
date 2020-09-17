'use strict';

export function countSwaps(a) {
    const n = a.length;
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swap(j, j + 1);
            }
        }
    }

    function swap(j, k) {
        let temp = a[j];
        a[j] = a[k];
        a[k] = temp;
        swaps++;
    }

    console.log(`Array is sorted in ${swaps} swaps.
First Element: ${a[0]}
Last Element: ${a[n-1]}`)
}