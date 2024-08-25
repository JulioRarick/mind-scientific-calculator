import { useContext } from 'react'

import { CalculatorContext } from '@/context/calculator-context'

export function useCalculator() {
  const context = useContext(CalculatorContext)

  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider')
  } else {
    return context
  }
}
