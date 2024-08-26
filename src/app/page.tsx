import Link from 'next/link'

import { Calculator } from '@/components/calculator/calculator'
import { Header } from '@/components/header'
import { CalculatorProvider } from '@/context/calculator-context'

export default function Home() {
  return (
    <main className="flex h-screen min-h-screen w-full flex-col items-center">
      <Header />
      <div className="flex h-full w-full flex-1 flex-col items-center justify-center">
        <CalculatorProvider>
          <Calculator />
        </CalculatorProvider>
        <Link
          href="https://www.juliorarick.tech"
          className="block p-8 text-sm hover:underline-offset-2 lg:hidden"
        >
          &copy; Code by Julio Rarick
        </Link>
      </div>
    </main>
  )
}
