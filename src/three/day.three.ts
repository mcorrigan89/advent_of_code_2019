type Direction = 'Up' | 'Down' | 'Left' | 'Right';

interface DistanceAndDirection {
  direction: Direction;
  distance: number;
}

interface Coord {
  x: number;
  y: number;
}

type WireCoords = Array<Coord>;

export const getDirectionAndDistance = (code: string): DistanceAndDirection => {
  switch (code[0]) {
    case 'R':
      return { direction: 'Right', distance: Number(code.slice(1, code.length)) };
    case 'L':
      return { direction: 'Left', distance: Number(code.slice(1, code.length)) };
    case 'U':
      return { direction: 'Up', distance: Number(code.slice(1, code.length)) };
    case 'D':
      return { direction: 'Down', distance: Number(code.slice(1, code.length)) };
    default:
      throw Error('Bad direction');
  }
};

export const createWireCommands = (wire: Array<string>): Array<DistanceAndDirection> => {
  return wire.map(command => getDirectionAndDistance(command));
};

export const createCoordsFromCommand = (wireCoords: WireCoords, command: DistanceAndDirection): WireCoords => {
  const wireEnd = wireCoords[wireCoords.length - 1];
  switch (command.direction) {
    case 'Right':
      return [...wireCoords, ...Array.from(Array(command.distance), (_, i) => ({ x: wireEnd.x + i + 1, y: wireEnd.y }))];
    case 'Left':
      return [...wireCoords, ...Array.from(Array(command.distance), (_, i) => ({ x: wireEnd.x - i - 1, y: wireEnd.y }))];
    case 'Up':
      return [...wireCoords, ...Array.from(Array(command.distance), (_, i) => ({ x: wireEnd.x, y: wireEnd.y + i + 1 }))];
    case 'Down':
      return [...wireCoords, ...Array.from(Array(command.distance), (_, i) => ({ x: wireEnd.x, y: wireEnd.y - i - 1 }))];
  }
};

export const createWireCoordinateArray = (wire: Array<string>): WireCoords => {
  return createWireCommands(wire).reduce((wireCoords: WireCoords, command) => createCoordsFromCommand(wireCoords, command), [{ x: 0, y: 0 }]);
};

const coordsMatch = (coord1: Coord, coord2: Coord) => {
  return coord1.x === coord2.x && coord1.y === coord2.y && coord1.x + coord1.y + coord2.x + coord2.y !== 0;
};

export const findIntersections = (wireOneCoords: WireCoords, wireTwoCoords: WireCoords) => {
  const intersections: Array<Coord> = [];
  wireOneCoords.forEach(coord1 => {
    wireTwoCoords.forEach(coord2 => {
      if (coordsMatch(coord1, coord2)) {
        intersections.push(coord1);
      }
    });
  });
  return intersections;
};

export const getClosestIntersction = (intersections: Array<Coord>) => {
  return intersections.reduce((acc: Coord, curr) => (Math.abs(curr.y) + Math.abs(curr.x) < Math.abs(acc.y) + Math.abs(acc.x) ? curr : acc));
};

const intersectionIndex = (intersection: Coord) => (value: Coord) => value.x === intersection.x && value.y === intersection.y;

export const getIntersectionSteps = (wireOneCoords: WireCoords, wireTwoCoords: WireCoords, intersections: Array<Coord>) =>
  intersections.map(intersection => [wireOneCoords.findIndex(intersectionIndex(intersection)), wireTwoCoords.findIndex(intersectionIndex(intersection))]).filter(v => v[0] > -1 && v[1] > -1)
  .reduce((acc, curr) => [...acc, curr[0] + curr[1]], [])
  .reduce((acc, curr) => curr < acc ? curr : acc, Infinity);

export const getClosestDistanceAndFewestSteps = (wireOne: Array<string>, wireTwo: Array<string>) => {
  const wireOneCoords = createWireCoordinateArray(wireOne);
  const wireTwoCoords = createWireCoordinateArray(wireTwo);
  const intersections = findIntersections(wireOneCoords, wireTwoCoords);
  const intersection = getClosestIntersction(intersections);
  const distance = Math.abs(intersection.x) + Math.abs(intersection.y);
  const steps = getIntersectionSteps(wireOneCoords, wireTwoCoords, intersections);
  return { distance, steps };
};
