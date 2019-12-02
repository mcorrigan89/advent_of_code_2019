import 'jest';

import { fuelForMass, totalFuelCostNonRecursive, totalFuelForModule, totalFuelCostRecursive } from './day.one';

describe('Advent of Code Day One', () => {
  describe('Part One', () => {
    it('should calculate mass for 12', () => {
      expect(fuelForMass(12)).toBe(2);
    });

    it('should calculate mass for 14', () => {
      expect(fuelForMass(14)).toBe(2);
    });

    it('should calculate mass for 1969', () => {
      expect(fuelForMass(1969)).toBe(654);
    });

    it('should calculate mass for 100756', () => {
      expect(fuelForMass(100756)).toBe(33583);
    });

    it('should add masses together', () => {
      const inputs = [12, 14, 1969, 100756];
      expect(totalFuelCostNonRecursive(inputs)).toBe(2 + 2 + 654 + 33583);
    });
  });

  describe('Part Two', () => {
    it('should calculate total fuel cost for 1969', () => {
      expect(totalFuelForModule(1969)).toBe(966);
    });

    it('should calculate total fuel cost for 100756', () => {
      expect(totalFuelForModule(100756)).toBe(50346);
    });

    it('should add masses together', () => {
      const inputs = [1969, 100756];
      expect(totalFuelCostRecursive(inputs)).toBe(966 + 50346);
    });
  });
});
