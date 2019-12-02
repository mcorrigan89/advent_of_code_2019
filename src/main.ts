import { input as dayOneInput } from './one/day.one.input';
import { totalFuelCostNonRecursive, totalFuelCostRecursive } from './one/day.one';

import { input as dayTwoInput} from './two/day.two.input';
import { readCode, updateTo1202Alarm } from './two/day.two';

console.log('Day One, Part One: ', totalFuelCostNonRecursive(dayOneInput));
console.log('Day One, Part Two: ', totalFuelCostRecursive(dayOneInput));

console.log('Day Two, Part One: ', readCode(updateTo1202Alarm(dayTwoInput))[0]);
