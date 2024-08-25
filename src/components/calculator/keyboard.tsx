import { cva } from 'class-variance-authority'

import { useCalculator } from '@/hooks/useCalculator'
import { cn } from '@/lib/utils'
import { advancedKeyValues, basicsKeysValues } from '@/utils/constants'

const keyboardVariants = cva(
  'flex items-center justify-center text-xl hover:font-bold transition-colors ease-in-out text-stone-600 hover:text-stone-950 dark:text-stone-500 dark:hover:text-stone-100',
  {
    variants: {
      variant: {
        default: 'rounded-md',
        equal: ' rounded-md hover:bg-sky-500/70 ',
        delete: ' rounded-md hover:bg-rose-500/70 ',
        clear: ' rounded-md hover:bg-stone-500/70',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export function Keyboard() {
  const { handleClickButton } = useCalculator()

  return (
    <section className="grid h-full w-full flex-1 grid-rows-smallApp overflow-hidden lg:grid-cols-largeApp lg:grid-rows-1">
      <div className="grid h-full w-full grid-cols-5 p-4 lg:grid-cols-2 lg:grid-rows-5">
        {advancedKeyValues.map((value, index) => (
          <button
            key={index}
            className={cn(keyboardVariants())}
            onClick={() => handleClickButton(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="h-px w-full rounded-md bg-stone-500 lg:h-full lg:w-px" />
      <div className="row-span-2 grid h-full w-full grid-cols-5 p-4 lg:col-span-2">
        {basicsKeysValues.map((value, index) => {
          const equalVariant = value === '=' ? 'equal' : undefined
          const deleteVariant = value === 'del' ? 'delete' : undefined
          const clearVariant = value === 'ac' ? 'clear' : undefined

          return (
            <button
              key={index}
              className={cn(
                keyboardVariants(),
                keyboardVariants({ variant: equalVariant }),
                keyboardVariants({ variant: deleteVariant }),
                keyboardVariants({ variant: clearVariant }),
              )}
              onClick={() => handleClickButton(value)}
            >
              {value}
            </button>
          )
        })}
      </div>
    </section>
  )
}
