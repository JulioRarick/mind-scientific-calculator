'use client'

import { all, create } from 'mathjs'
import { createContext, ReactNode, useState } from 'react'

import {
  advancedOperatorFunctions,
  AdvancedOperators,
  KeyboardValues,
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

  function calculateResult() {
    if (expression.length !== 0) {
      try {
        const result = math.evaluate(expression)
        setValue(result.toString())

        setExpression(result.toString())
        setDisplayExpression(result.toString())
      } catch (error) {
        setValue('Error')
        setExpression('')
        setDisplayExpression('Error')
      }
    }
  }
  function takeLastNumber(expression: string) {
    const lastNumbers = expression.match(/\d+/g)
    return lastNumbers ? lastNumbers[lastNumbers.length - 1] : null
  }

  function handleClickButton(keyValue: KeyboardValues) {
    if (keyValue === 'del') {
      setExpression((previous) => previous.slice(0, -1))
      setDisplayExpression((previous) => previous.slice(0, -1))
    } else if (keyValue === 'ac') {
      setExpression('')
      setDisplayExpression(' ')
      setValue('0')
    } else if (keyValue === '=') {
      calculateResult()
    } else if (keyValue === '!') {
      const lastNumber = takeLastNumber(expression)
      if (lastNumber !== null) {
        const number = parseFloat(lastNumber)
        setExpression(expression.replace(lastNumber, `factorial(${number})`))
        setDisplayExpression((previous) => previous + keyValue)
        console.log(number)
      }
    } else if (
      Object.prototype.hasOwnProperty.call(advancedOperatorFunctions, keyValue)
    ) {
      const keyExists = advancedOperatorFunctions[keyValue as AdvancedOperators]
      if (keyExists === 'e' || keyExists === 'pi' || keyExists === '^') {
        setExpression((previous) => previous + keyExists)
        setDisplayExpression((previous) => previous + keyValue)
      } else {
        setExpression((previous) => previous + keyExists + '(')
        setDisplayExpression((previous) => previous + keyValue + '(')
      }
    } else {
      setExpression((previous) => previous + keyValue)
      setDisplayExpression((previous) => previous + keyValue)
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
