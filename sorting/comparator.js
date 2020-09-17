'use strict';

export class Checker {
    static compare(a, b) {
        let diff = b.score - a.score;

        return diff != 0 ? diff : a.name.localeCompare(b.name);
    }
}