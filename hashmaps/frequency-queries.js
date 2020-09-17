'use strict';

export function freqQuery(queries) {
    const INSERT = 1;
    const DELETE = 2;
    const CHECK = 3;

    const items = new Map();
    const freq = new Map();

    return queries
        .map(q => runQuery(q))
        .filter((value) => typeof value !== 'undefined');

    function runQuery([op, x]) {
        switch (op) {
            case INSERT:
                return insertOp(x);
            case DELETE:
                return deleteOp(x);
            case CHECK:
                return checkOp(x);
        }
    }

    function insertOp(x) {
        let count = increment(items, x);
        
        if (count > 0) {
            decrement(freq, count);
        }

        increment(freq, count + 1);

        // console.error(items, freq);
    }

    function deleteOp(x) {
        let count = decrement(items, x);

        if (count > 0) {
            decrement(freq, count);
            
            if (count - 1 > 0) {
                increment(freq, count - 1);
            }
        }

        // console.error(items, freq);
    }
    
    function checkOp(f) {
        let freqCount = freq.get(f) || 0;
        let result = freqCount > 0 ? 1 : 0;
        // console.error(result);
        return result;
    }

    function increment(map, key) {
        let val = map.get(key) || 0;
        map.set(key, val + 1);
        return val;
    }

    function decrement(map, key) {
        if (map.has(key)) {
            let val = map.get(key);

            if (val - 1 === 0) {
                map.delete(key);
            }
            else {
                map.set(key, val - 1);
            }

            return val;
        }
        else {
            return 0;
        }
    }
}