const keyboardBasicsValues = [
  '7',
  '8',
  '9',
  '*',
  '/',
  '4',
  '5',
  '6',
  '-',
  '(',
  '1',
  '2',
  '3',
  '+',
  ')',
  '.',
  '0',
  'del',
  'ac',
  '=',
] as const

const keyboardAdvancedValues = [
  'sin',
  'cos',
  'ln',
  'log',
  'tan',
  'π',
  'e',
  '^',
  '!',
  '√',
] as const

export function Keyboard() {
  return (
    <section className="grid-rows-smallApp lg:grid-cols-largeApp grid h-full w-full flex-1 overflow-hidden lg:grid-rows-1">
      <div className="grid h-full w-full grid-cols-5 lg:grid-cols-2 lg:grid-rows-5">
        {keyboardAdvancedValues.map((value, index) => (
          <button
            key={index}
            className="flex items-center justify-center p-1 text-xl text-stone-800 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-300"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="h-px w-full rounded-md bg-stone-500 lg:h-full lg:w-px" />
      <div className="row-span-2 grid h-full w-full grid-cols-5 lg:col-span-2">
        {keyboardBasicsValues.map((value, index) => (
          <button
            key={index}
            className="flex items-center justify-center p-1 text-2xl text-stone-800 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-300"
          >
            {value}
          </button>
        ))}
      </div>
    </section>
  )
}
