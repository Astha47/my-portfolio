import Image from 'next/image'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-primary-dark via-black to-secondary-dark">
      <Hero/>
    </main>
  )
}
