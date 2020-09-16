'use strict';

export function minimumBribes(q) {
    const MAX_BRIBES = 2;
    const len = q.length;
    let bribeCount = 0;

    for (let round = 0; round < MAX_BRIBES; round++) {
        bribeCount += unbribe(q);
        console.error(q);
    }

    if (!queueInOrder(q)) {
        console.log('Too chaotic');
    }
    else {
        console.log(bribeCount);
    }
}

function unbribe(q) {
    const len = q.length;
    let bribeCount = 0;

    for (let i = len-1; i > 0; i--) {
        let person = q[i];
        let personBefore = q[i-1];
        
        if (person < personBefore) {
            bribeCount++;
            q[i-1] = person;
            q[i] = personBefore;
        }
    }

    return bribeCount;
}

function queueInOrder(q) {
    for (let i = 0; i < q.length-1; i++) {
        if (q[i] > q[i+1]) return false;
    }

    return true;
}

export function minimumBribesOn2(q) {
    const bribes = new Map();
    const len = q.length;

    for (let left = 0; left < len; left++) {
        for (let i = len - 1; i > left; i--) {
            let person = q[i];
            let personBefore = q[i-1];
    
            if (person < personBefore) {
                let brb = bribes.get(personBefore) || 0;
    
                if (brb === 2) {
                    console.log('Too chaotic');
                    return;
                }
    
                bribes.set(personBefore, brb + 1);

                q[i] = personBefore;
                q[i-1] = person;

                console.error(q);
            }
        }
    }

    console.error(bribes);
    let result = Array.from(bribes.values()).reduce((acc, val) => acc + val, 0);
    console.log(result)
}