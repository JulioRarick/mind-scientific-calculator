import { Calculator } from 'lucide-react'
import Link from 'next/link'

import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-center">
      <article className="flex w-full max-w-screen-md items-center justify-between px-8">
        <h1 className="flex items-center justify-center gap-1 text-2xl font-bold tracking-tighter">
          <Calculator className="h-9 w-9 text-cyan-600" />
          mind.sc
        </h1>
        <ThemeToggle />
        <Link
          href="https://www.juliorarick.tech"
          className="hidden text-sm hover:underline-offset-2 lg:block"
        >
          &copy; Code by Julio Rarick
        </Link>
      </article>
    </header>
  )
}
