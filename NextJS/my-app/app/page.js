import { Kodchasan } from 'next/font/google'
import LandingPage from "./component/landingPage"

import "./styles/reset.css"
import "./globals.css";
import "./styles/pagePattern.css"

const kodchasan = Kodchasan ({
  subsets: ['latin'],
  variable: '--font-kodchasan',
  weight: '400'
})

export default function Home() {

  return(
    <>
      <div className={`bg-[url('../public/introduction_background.png')] absolute top-0 w-full h-screen`}>        
          <LandingPage/>
      </div>
    </>
  )
}
