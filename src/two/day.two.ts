const ADD = 1;
const MULTIPLY = 2;
const END = 99;

const addNumbers = (code: Array<number>, pos1: number, pos2: number, pos3: number) => {
  code[pos3] = code[pos1] + code[pos2];
  return code;
};

const multiplyNumbers = (code: Array<number>, pos1: number, pos2: number, pos3: number) => {
  code[pos3] = code[pos1] * code[pos2];
  return code;
};

const handleIntCode = (code: number, index: number, codeArray: Array<number>): { codeArray: Array<number>; halt: boolean } => {
  switch (code) {
    case ADD:
      return { codeArray: addNumbers(codeArray, codeArray[index + 1], codeArray[index + 2], codeArray[index + 3]), halt: false };
    case MULTIPLY:
      return { codeArray: multiplyNumbers(codeArray, codeArray[index + 1], codeArray[index + 2], codeArray[index + 3]), halt: false };
    case END:
      return { codeArray, halt: true };
    default:
      return { codeArray, halt: false };
  }
};

export const readCode = (codeArray: Array<number>) => {
  const result = codeArray.reduce(
    (acc, curr, idx) => {
      // Jump four indexes if not halted
      if (!acc.halt && idx % 4 === 0) {
        return handleIntCode(curr, idx, codeArray);
      } else {
        return acc;
      }
    },
    { codeArray, halt: false }
  );
  return result.codeArray;
};

export const updateTo1202Alarm = (codeArray: Array<number>) => {
  codeArray[1] = 12;
  codeArray[2] = 2;
  return codeArray;
};