import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

interface PromptProps {
  expression: string
  result: string
}
const resultVariants = cva('font-bold', {
  variants: {
    variant: {
      default: 'text-5xl',
      small: 'text-4xl',
      medium: ' text-3xl',
      long: ' text-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export function Prompt({ expression, result }: PromptProps) {
  const longResult = result.length > 8 ? 'long' : 'default'
  const mediumResult = result.length > 10 ? 'medium' : 'default'
  const smallResult = result.length > 15 ? 'small' : 'default'
  return (
    <section className="flex h-20 w-full flex-col items-end justify-end pb-3 text-end">
      <p className="h-2/5 w-full pb-2 font-semibold text-stone-500">
        {expression}
      </p>
      <p
        className={cn(
          resultVariants(),
          resultVariants({ variant: longResult }),
          resultVariants({ variant: mediumResult }),
          resultVariants({ variant: smallResult }),
        )}
      >
        {result}
      </p>
    </section>
  )
}
