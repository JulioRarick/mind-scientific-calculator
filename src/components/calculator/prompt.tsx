interface PromptProps {
  expression: string
  result: string
}

export function Prompt({ expression, result }: PromptProps) {
  return (
    <section className="flex h-20 w-full flex-col items-end justify-end pb-3 text-end">
      <p className="h-2/5 w-full pb-2 font-semibold text-stone-500">
        {expression}
      </p>
      <p className="text-5xl font-bold">{result}</p>
    </section>
  )
}
