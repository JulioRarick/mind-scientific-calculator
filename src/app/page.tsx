import { Calculator } from '@/components/calculator/calculator'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="flex h-screen min-h-screen w-full flex-col items-center">
      <Header />
      <div className="flex h-full w-full flex-1 items-center justify-center">
        <Calculator />
      </div>
    </main>
  )
}
