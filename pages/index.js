import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Solution from '@/sections/Solution'
import Review from '@/sections/Review'
import Contact from '@/sections/Contact'
import Services from '@/sections/Services'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <Hero/>
     <About/>
     <Solution />
     <Review/>
     <Services />
     <Contact/>
    <Footer />
    </main>
  )
}
