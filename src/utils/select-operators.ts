import { SpecialOperators } from "./constants"

export function handleSpecialOperator(operator: SpecialOperators) {
  switch (operator) {
    case SpecialOperators.DELETE:
      setExpression((prev) => prev.slice(0, -1))
      setDisplayExpression((prev) => prev.slice(0, -1))
      break
    case SpecialOperators.CLEAR:
      setExpression('')
      setDisplayExpression('')
      setValue('0')
      break
    case SpecialOperators.EQUALS:
      calculateResult()
      break
    case SpecialOperators.DECIMAL:
    case SpecialOperators.OPEN_PARENTHESIS:
    case SpecialOperators.CLOSE_PARENTHESIS:
      setExpression((prev) => prev + operator)
      setDisplayExpression((prev) => prev + operator)
      break
  }
}
