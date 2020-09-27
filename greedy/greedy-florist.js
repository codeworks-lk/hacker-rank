'use strict';

export function getMinimumCost(friends, flowers) {
    flowers.sort((a,b) => b - a);
    return flowers.reduce((acc, cost, index) => acc + (cost * (1 + Math.floor(index / friends))), 0);
}