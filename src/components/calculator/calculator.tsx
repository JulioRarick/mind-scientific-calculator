'use client'

import { useCalculator } from '@/hooks/useCalculator'

import { Keyboard } from './keyboard'
import { Prompt } from './prompt'

export function Calculator() {
  const { displayExpression, value } = useCalculator()
  return (
    <article className="flex h-4/5 w-full flex-col bg-stone-200 p-4 shadow-md dark:bg-stone-900/50 lg:h-[400px] lg:w-[600px] lg:rounded-lg">
      <Prompt expression={displayExpression} result={value} />
      <Keyboard />
    </article>
  )
}
