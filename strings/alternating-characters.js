'use strict';

export function alternatingCharacters(s) {
    let del = 0;
    let curr = '';
    
    for (let ch of Array.from(s)) {
        if (curr === '') {
            curr = ch;
        }
        else if (curr === ch) {
            del++;
        }
        else {
            curr = ch;
        }
    }

    return del;
}