'use client'

import { all, create, MathJsInstance } from 'mathjs'
import { createContext, ReactNode, useState } from 'react'

import {
  advancedOperatorFunctions,
  AdvancedOperators,
  BasicOperators,
  KeyboardValues,
  SpecialOperators,
} from '@/utils/constants'

const math = create(all)

interface CalculatorContextType {
  displayExpression: string
  value: string
  handleClickButton: (keyValue: KeyboardValues) => void
}

interface CalculatorProviderProps {
  children: ReactNode
}

export const CalculatorContext = createContext<
  CalculatorContextType | undefined
>(undefined)

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [expression, setExpression] = useState('')
  const [displayExpression, setDisplayExpression] = useState('')
  const [value, setValue] = useState('0')

  function takeLastNumber(expression: string) {
    const lastNumbers = expression.match(/\d+/g)
    return lastNumbers ? lastNumbers[0] : null
  }
  function calculateResult() {
    try {
      const result = math.evaluate(expression)
      setValue(result.toString())
    } catch (error) {
      setValue('Error')
    }
  }
  function handleSpecialOperator(operator: SpecialOperators) {
    switch (operator) {
      case SpecialOperators.DELETE:
        setExpression((state) => state.slice(0, -1))
        setDisplayExpression((state) => state.slice(0, -1))
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
        setExpression((state) => state + operator)
        setDisplayExpression((state) => state + operator)
        break
    }
  }
  function handleBasicOperator(keyValue: BasicOperators) {
    setExpression((state) => state + keyValue)
    setDisplayExpression((state) => state + keyValue)
  }

  function handleAdvancedOperator(operator: AdvancedOperators) {
    const operation = advancedOperatorFunctions[
      operator
    ] as keyof MathJsInstance
    const lastNumber = takeLastNumber(expression)

    if (lastNumber !== null && typeof math[operation] === 'function') {
      const formattedExpression = `${operator}(${lastNumber})`
      const result = math[operation](parseFloat(lastNumber))
      setExpression(expression.replace(lastNumber, result.toString()))
      setDisplayExpression((state) =>
        state.replace(lastNumber, formattedExpression),
      )
    } else {
      // Adiciona o operador diretamente se não houver lastNumber
      setExpression((state) => state + operator)
      setDisplayExpression((state) => state + operator)
    }
  }

  function handleClickButton(keyValue: KeyboardValues) {
    if (
      Object.values(SpecialOperators).includes(keyValue as SpecialOperators)
    ) {
      handleSpecialOperator(keyValue as SpecialOperators)
    } else if (
      Object.keys(advancedOperatorFunctions).includes(keyValue as string)
    ) {
      handleAdvancedOperator(keyValue as AdvancedOperators)
    } else {
      handleBasicOperator(keyValue as BasicOperators)
    }
  }

  return (
    <CalculatorContext.Provider
      value={{ displayExpression, value, handleClickButton }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}
