// Part One
export const fuelForMass = (mass: number) => Math.floor(mass / 3) - 2;

export const totalFuelCostNonRecursive = (moduleList: Array<number>) => moduleList.map(rocketModule => fuelForMass(rocketModule)).reduce((acc, curr) => acc + curr, 0);

// Part Two
const totalFuel = (mass: number): number => {
  if (fuelForMass(mass) > 0) {
    return totalFuel(fuelForMass(mass)) + mass;
  } else {
    return mass;
  }
};

export const totalFuelForModule = (moduleMass: number) => totalFuel(fuelForMass(moduleMass));

export const totalFuelCostRecursive = (moduleList: Array<number>) => moduleList.map(rocketModule => totalFuelForModule(rocketModule)).reduce((acc, curr) => acc + curr, 0);
