import 'jest';
import {
  getDirectionAndDistance,
  createCoordsFromCommand,
  createWireCoordinateArray,
  findIntersections,
  getClosestIntersction,
  getClosestDistanceAndFewestSteps
} from './day.three';

describe('Advent of Code Day Three', () => {
  describe('Part One', () => {
    it('Should give direction and distance as axis and distance int R', () => {
      expect(getDirectionAndDistance('R75')).toEqual({ direction: 'Right', distance: 75 });
    });
    it('Should give direction and distance as axis and distance int L', () => {
      expect(getDirectionAndDistance('L12')).toEqual({ direction: 'Left', distance: 12 });
    });
    it('Should give direction and distance as axis and distance int U', () => {
      expect(getDirectionAndDistance('U83')).toEqual({ direction: 'Up', distance: 83 });
    });
    it('Should give direction and distance as axis and distance int D', () => {
      expect(getDirectionAndDistance('D30')).toEqual({ direction: 'Down', distance: 30 });
    });
    it('should create a coordinate array Right', () => {
      expect(createCoordsFromCommand([{ x: 0, y: 0 }], { direction: 'Right', distance: 3 })).toEqual([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 }
      ]);
    });
    it('should create a coordinate array Left', () => {
      expect(createCoordsFromCommand([{ x: 0, y: 0 }], { direction: 'Left', distance: 3 })).toEqual([
        { x: 0, y: 0 },
        { x: -1, y: 0 },
        { x: -2, y: 0 },
        { x: -3, y: 0 }
      ]);
    });
    it('should create a coordinate array Up', () => {
      expect(createCoordsFromCommand([{ x: 0, y: 0 }], { direction: 'Up', distance: 3 })).toEqual([
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 0, y: 3 }
      ]);
    });
    it('should create a coordinate array Down', () => {
      expect(createCoordsFromCommand([{ x: 0, y: 0 }], { direction: 'Down', distance: 3 })).toEqual([
        { x: 0, y: 0 },
        { x: 0, y: -1 },
        { x: 0, y: -2 },
        { x: 0, y: -3 }
      ]);
    });
    it('should create coordinates from commands', () => {
      const wire1 = ['R3', 'D2', 'L3', 'U1'];
      expect(createWireCoordinateArray(wire1)).toEqual([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 3, y: -1 },
        { x: 3, y: -2 },
        { x: 2, y: -2 },
        { x: 1, y: -2 },
        { x: 0, y: -2 },
        { x: 0, y: -1 }
      ]);

      const wire2 = ['R3', 'D2', 'R3', 'D2'];
      expect(createWireCoordinateArray(wire2)).toEqual([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 3, y: -1 },
        { x: 3, y: -2 },
        { x: 4, y: -2 },
        { x: 5, y: -2 },
        { x: 6, y: -2 },
        { x: 6, y: -3 },
        { x: 6, y: -4 }
      ]);
    });
    it('should find intersections between wires', () => {
      const wireCoords1 = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 2, y: 2 },
        { x: 1, y: 2 },
        { x: 1, y: 3 }
      ];
      const wireCoords2 = [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 1, y: 2 },
        { x: 2, y: 2 },
        { x: 3, y: 2 },
        { x: 4, y: 2 }
      ];
      expect(findIntersections(wireCoords1, wireCoords2)).toEqual([
        { x: 2, y: 2 },
        { x: 1, y: 2 }
      ]);
    });
    it('should get closest intersection', () => {
      expect(
        getClosestIntersction([
          { x: 2, y: 2 },
          { x: 1, y: 2 }
        ])
      ).toEqual({ x: 1, y: 2 });
    });
    it('should get closest intersection distance from commands 1', () => {
      const wire1 = ['R8', 'U5', 'L5', 'D3'];
      const wire2 = ['U7', 'R6', 'D4', 'L4'];
      expect(getClosestDistanceAndFewestSteps(wire1, wire2).distance).toEqual(6);
    });
    it('should get closest intersection distance from commands 2', () => {
      const wire1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
      const wire2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];
      expect(getClosestDistanceAndFewestSteps(wire1, wire2).distance).toEqual(159);
    });
    it('should get closest intersection distance from commands 3', () => {
      const wire1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
      const wire2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];
      expect(getClosestDistanceAndFewestSteps(wire1, wire2).distance).toEqual(135);
    });
    it('should get fewest steps intersection from commands 1', () => {
      const wire1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
      const wire2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];
      expect(getClosestDistanceAndFewestSteps(wire1, wire2).steps).toEqual(610);
    });
    it('should get fewest steps intersection from commands 1', () => {
      const wire1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
      const wire2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];
      expect(getClosestDistanceAndFewestSteps(wire1, wire2).steps).toEqual(410);
    });
  });
});
