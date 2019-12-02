import 'jest';
import { readCode } from './day.two';

describe('Advent of Code Day Two', () => {
  describe('Part One', () => {
    it('Should complete program [1,0,0,0,99] = [2,0,0,0,99]', () => {
      expect(readCode([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
    });

    it('Should complete program [2,3,0,3,99] = [2,3,0,6,99]', () => {
      expect(readCode([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
    });

    it('Should complete program [2,4,4,5,99,0] = [2,4,4,5,99,9801]', () => {
      expect(readCode([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
    });

    it('Should complete program [1,1,1,4,99,5,6,0,99] = [30,1,1,4,2,5,6,0,99]', () => {
      expect(readCode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
    });
  });
});
