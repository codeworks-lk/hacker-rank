'use strict';

export function commonChild(a, b) {
    a = '_' + a;
    b = '_' + b;
    let na = a.length, nb = b.length;
    let currentRow = Array(nb);
    let topRow = Array(nb);

    for (let ia = 0; ia < na; ia++) {
        topRow = currentRow;
        currentRow = Array(nb);

        for (let ib = 0; ib < nb; ib++) {
            if (ia === 0 || ib === 0) {
                currentRow[ib] = 0;
            }
            else if (a[ia] === b[ib]) {
                currentRow[ib] = topRow[ib-1] + 1;
            }
            else {
                let top = topRow[ib];
                let left = currentRow[ib-1];
                currentRow[ib] = top >= left ? top : left;
            }
        }
    }

    let biggest = currentRow[nb-1];
    console.log(na*nb, biggest);
    return biggest;
}

export function commonChildArray(a, b) {
    a = '_' + a;
    b = '_' + b;
    let na = a.length, nb = b.length;
    let currentRow = Array(nb);
    let topRow = Array(nb);

    for (let ia = 0; ia < na; ia++) {
        topRow = currentRow;
        currentRow = Array(nb);

        for (let ib = 0; ib < nb; ib++) {
            if (ia === 0 || ib === 0) {
                currentRow[ib] = [];
            }
            else if (a[ia] === b[ib]) {
                currentRow[ib] = topRow[ib-1].concat(a[ia]);
            }
            else {
                let top = topRow[ib];
                let left = currentRow[ib-1];
                currentRow[ib] = top.length >= left.length ? top : left;
            }
        }
    }

    let biggest = currentRow[nb-1];
    console.log(na*nb, biggest.join(''));
    return biggest.length;
}


export function commonChildTraceBack(s1, s2) {

    s1 = '_' + s1;
    s2 = '_' + s2;
    let n1 = s1.length;
    let n2 = s2.length;
    let tasks = [];
    let children = Array(n1);
    children.fill(1);
    children = children.map((_) => Array(n2));

    let taskSet = Array(n1);
    taskSet.fill(1);
    taskSet = taskSet.map((_) => Array(n2));

    // console.log(s1);
    // console.log(s2);

    tasks.push({
        i1: n1 - 1,
        i2: n2 - 1
    })

    let iterations = 0;
    while (tasks.length > 0) {
        iterations++;
        // console.log(tasks.length, n1*n2);
        let { i1, i2 } = getTask();

        if (hasChildAt(i1, i2)) {
            continue;
        }
        else if (i1 === 0 || i2 === 0) {
            children[i1][i2] = [];
        }
        else if (s1[i1] === s2[i2]) {
            if (hasChildAt(i1-1, i2-1)) {
                children[i1][i2] = children[i1-1][i2-1].concat(s1[i1]);
                // console.log(i1, i2, children[i1][i2].join(''));
            }
            else {
                // solve this first
                addTask(i1-1, i2-1);
                // then solve this again
                addTask(i1, i2);
            }
        }
        else {
            if (hasChildAt(i1-1, i2) && hasChildAt(i1, i2-1)) {
                let child = getBiggerOf(children[i1-1][i2], children[i1][i2-1]);
                children[i1][i2] = child;
                // console.log(i1, i2, children[i1][i2].join(''));
            }
            else {
                if (!hasChildAt(i1-1, i2)) {
                    addTask(i1-1, i2);
                }
    
                if (!hasChildAt(i1, i2-1)) {
                    addTask(i1, i2-1);
                }

                // then solve this again
                addTask(i1, i2)
            }
        }
    }

    // console.log(children.map((row) => row.map((v) => v ? v.join('') : '')));
    let biggest = children[n1-1][n2-1];
    console.log(iterations, n1*n2, biggest.join(''));
    return biggest.length;

    function hasChildAt(i1, i2) {
        return typeof children[i1][i2] !== 'undefined';
    }

    function getTask() {
        let { i1, i2 } = tasks.shift();
        taskSet[i1][i2] = 0;
        return { i1, i2 };
    }

    function addTask(i1, i2) {
        if (taskSet[i1][i2] !== 1) {
            tasks.push({ i1, i2 });
            taskSet[i1][i2] = 1;
            // console.log({ i1 , i2 });
        }
    }
}

function getBiggerOf(child1, child2) {
    return child1.length >= child2.length ? child1 : child2;
}

export function commonChildBrute(s1, s2) {
    let freq1 = getFrequenciesOf(s1);
    let freq2 = getFrequenciesOf(s2);
    let n = s1.length;
    let forks = [];
    let results = [];
    let winner = '';

    // start from the end of the string
    forks.push({
        pos1: n-1,
        pos2: n-1,
        child: []
    });

    let i = 0;
    while (forks.length > 0 && i++ <= 100000) {
        let choice = forks.shift();
        let c1 = s1[choice.pos1];

        console.log(forks.length, c1, choice);

        if (choice.pos1 > 0) {
            // either skip char at pos1
            forks.push({
                pos1: choice.pos1-1,
                pos2: choice.pos2,
                child: choice.child
            });

            // -or- keep char at pos1 and move pos2 to the first found char in s2
            let search = lookup(freq2, c1, choice.pos2);

            if (search.found) {
                if (search.pos > 0) {
                    forks.push({
                        pos1: choice.pos1-1,
                        pos2: search.pos-1,
                        child: [c1].concat(choice.child),
                    });
                }
                else {
                    // cannot move further
                    let child = [c1].concat(choice.child)
                    if (child.length > winner.length) {
                        winner = child.join('');
                        console.log(winner);
                    }
                }
            }
            else {
                // c1 not found anymore
                if (choice.child.length > winner.length) {
                    winner = choice.child.join('');
                    console.log(winner);
                }
            }
        }
    }

    console.log(winner);
    return winner.length;
}

function lookup(freq, char, pos) {
    let idxList = freq.get(char) || [];

    for (let idx of idxList) {
        if (idx <= pos) {
            return {
                found: true,
                pos: idx,
            }
        }
    }

    return {
        found: false
    }
}

export function commonChildLookup(s1, s2) {
    let childList = [];

    let freq1 = getFrequenciesOf(s1);
    let freq2 = getFrequenciesOf(s2);

    let n = s1.length;

    for (let pos = n - 1; pos >= 0; pos--) {
        let childLen = 0;
        let i1 = pos;
        let i2 = pos;

        while (i1 >= 0 && i2 >= 0) {
            let c1 = s1[i1];
            let c2 = s2[i2];

            let search1 = findCharLeftTo(c2, freq1, i1 + 1);
            let search2 = findCharLeftTo(c1, freq2, i2 + 1);

            // console.log(c1, i1, search2, c2, i2, search1, childLen);

            if (!search1.found) {
                // current char from s2 does not exist in s1, move i2
                i2--;
            }
            else if (!search2.found) {
                i1--;
            }
            else {
                // both found
                let skip1 = i1 - search1.idx
                let skip2 = i2 - search2.idx

                if (skip1 <= skip2) {
                    // less wasted if we move i1
                    i1 = search1.idx;
                }
                else {
                    // less wasted if we move i2
                    i2 = search2.idx;
                }

                // match found, child grows
                childLen++;

                // move both
                i1--;
                i2--;
            }
        }

        childList[pos] = childLen
    }

    console.log(childList);

    return childList.reduce((acc, v) => Math.max(acc, v), 0);

}

function getFrequenciesOf(s) {
    let freq = new Map();
    let n = s.length;

    for (let i = n - 1; i >= 0; i--) {
        let c = s[i];
        let idxLst = freq.get(c) || [];
        freq.set(c, idxLst.concat(i));
    }

    // console.log(s);
    // console.log(freq);

    return freq;
}

function findCharLeftTo(char, freq, boundary) {
    let idxList = freq.get(char) || [];

    for (let idx of idxList) {
        if (idx < boundary) {
            return {
                idx,
                found: true
            }
        }
    }

    return {
        found: false
    }
}


