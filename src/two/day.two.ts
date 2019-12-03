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
  const updatedCode = Array.from(codeArray);
  updatedCode[1] = 12;
  updatedCode[2] = 2;
  return updatedCode;
};

const updateProgramState = (nount: number, verb: number, codeArray: Array<number>) => {
  const updatedCode = Array.from(codeArray);
  updatedCode[1] = nount;
  updatedCode[2] = verb;
  return updatedCode;
};

export const findNumberBasedOnArgs = (answer: number, codeArray: Array<number>) => {
  // Calculate the change between answers based on the input
  // This is assuming it is a steady rate of change
  const nounDiff = Math.abs(readCode(updateProgramState(0, 0, codeArray))[0] - readCode(updateProgramState(1, 0, codeArray))[0]);
  const verbDiff = Math.abs(readCode(updateProgramState(0, 0, codeArray))[0] - readCode(updateProgramState(0, 1, codeArray))[0]);

  // See how many times the noun difference can be added to the answer.
  const nounArg = Math.floor((answer - readCode(updateProgramState(0, 0, codeArray))[0]) / nounDiff);
  // See how many times the verb difference can be added to the answer after the noun diff is applied.
  const verbArg = answer - readCode(updateProgramState(nounArg, 0, codeArray))[0] / verbDiff;

  return { noun: nounArg, verb: verbArg };
};
