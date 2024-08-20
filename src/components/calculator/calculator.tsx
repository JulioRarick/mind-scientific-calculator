import { Keyboard } from './keyboard'
import { Prompt } from './prompt'

export function Calculator() {
  return (
    <article className="flex h-4/5 w-full flex-col bg-stone-200 p-4 lg:h-[400px] lg:w-[600px] lg:rounded-lg dark:bg-stone-900/50">
      <Prompt />
      <Keyboard />
    </article>
  )
}
