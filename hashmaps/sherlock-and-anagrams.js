'use strict';

export function sherlockAndAnagrams(s) {
    let anagramCount = 0;

    for (let wordLength = 1; wordLength < s.length; wordLength++) {
        let words = [];

        for (let start = 0; start <= s.length - wordLength; start++) {
            words.push(s.substring(start, start + wordLength));
        }

        const wordMaps = words.map((word) => toCharMap(word));

        for (let i = 0; i < words.length; i++) {
            for (let j = i+1; j < words.length; j++) {
                if (isAnagram(wordMaps[i], wordMaps[j])) {
                    console.error('anagram:', words[i], words[j]);
                    anagramCount++;
                }
            }
        }

        // console.error(words);
    }

    return anagramCount;
}

function toCharMap(word) {
    const map = new Map();

    Array.from(word).forEach((char) => {
        const val = map.get(char) || 0;
        map.set(char, val + 1);
    });

    return map;
}

function isAnagram(map1, map2) {
    for (const [ key, val ] of map1) {
        if (map2.get(key) !== val) {
            return false;
        }
    }

    return true;
}