import { input as dayOneInput } from './one/day.one.input';
import { totalFuelCostNonRecursive, totalFuelCostRecursive } from './one/day.one';

import { input as dayTwoInput } from './two/day.two.input';
import { readCode, updateTo1202Alarm, findNumberBasedOnArgs } from './two/day.two';

import { wire1, wire2 } from './three/day.three.input';
import { getClosestDistanceAndFewestSteps } from './three/day.three';

console.log('Day One, Part One: ', totalFuelCostNonRecursive(dayOneInput));
console.log('Day One, Part Two: ', totalFuelCostRecursive(dayOneInput));

console.log('Day Two, Part One: ', readCode(updateTo1202Alarm(dayTwoInput))[0]);
console.log('Day Two, Part Two: ', findNumberBasedOnArgs(19690720, dayTwoInput));

console.log('Day Three, Part One', getClosestDistanceAndFewestSteps(wire1, wire2).distance);
console.log('Day Three, Part Two', getClosestDistanceAndFewestSteps(wire1, wire2).steps);
