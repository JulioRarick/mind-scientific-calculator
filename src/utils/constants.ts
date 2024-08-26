export enum SpecialOperators {
  DELETE = 'del',
  CLEAR = 'ac',
  EQUALS = '=',
  DECIMAL = '.',
  OPEN_PARENTHESIS = '(',
  CLOSE_PARENTHESIS = ')',
}

export enum BasicOperators {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}
export enum AdvancedOperators {
  SIN = 'sin',
  COS = 'cos',
  TAN = 'tan',
  LN = 'ln',
  LOG = 'log',
  FACTORIAL = '!',
  POWER = '^',
  SQUARE_ROOT = '√',
  PI = 'π',
  E = 'e',
}

export const advancedOperatorFunctions = {
  [AdvancedOperators.SIN]: 'sin',
  [AdvancedOperators.COS]: 'cos',
  [AdvancedOperators.TAN]: 'tan',
  [AdvancedOperators.LN]: 'log',
  [AdvancedOperators.LOG]: 'log10',
  [AdvancedOperators.FACTORIAL]: 'factorial',
  [AdvancedOperators.POWER]: '^',
  [AdvancedOperators.SQUARE_ROOT]: 'sqrt',
  [AdvancedOperators.PI]: 'pi',
  [AdvancedOperators.E]: 'e',
}

export const basicsKeysValues = [
  '7',
  '8',
  '9',
  BasicOperators.MULTIPLY,
  BasicOperators.DIVIDE,
  '4',
  '5',
  '6',
  BasicOperators.SUBTRACT,
  BasicOperators.ADD,
  '1',
  '2',
  '3',
  SpecialOperators.OPEN_PARENTHESIS,
  SpecialOperators.CLOSE_PARENTHESIS,
  SpecialOperators.DECIMAL,
  '0',
  SpecialOperators.DELETE,
  SpecialOperators.CLEAR,
  SpecialOperators.EQUALS,
] as const

export const advancedKeyValues = [
  AdvancedOperators.SIN,
  AdvancedOperators.COS,
  AdvancedOperators.TAN,
  AdvancedOperators.LN,
  AdvancedOperators.LOG,
  AdvancedOperators.PI,
  AdvancedOperators.E,
  AdvancedOperators.POWER,
  AdvancedOperators.FACTORIAL,
  AdvancedOperators.SQUARE_ROOT,
] as const

export const allOperators = [
  ...basicsKeysValues,
  ...Object.keys(advancedOperatorFunctions),
] as const

export const allAdvancedKeyboards = Object.keys(advancedKeyValues)

export const allKeyboards = [
  ...basicsKeysValues,
  ...allAdvancedKeyboards,
] as const

export type KeyboardSpecialOperatorsType = (typeof basicsKeysValues)[number]
export type KeyboardOperatorsType = (typeof allOperators)[number]
export type KeyboardValues =
  | KeyboardSpecialOperatorsType
  | KeyboardOperatorsType
