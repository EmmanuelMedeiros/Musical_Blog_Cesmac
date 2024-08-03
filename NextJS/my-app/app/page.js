import { Kodchasan } from 'next/font/google'
import LandingPage from "./component/landingPage"

import "./styles/reset.css"
import "./globals.css";

const kodchasan = Kodchasan ({
  subsets: ['latin'],
  variable: '--font-kodchasan',
  weight: '400'
})

export default function Home() {

  return(
    <>
      <div >        
          <LandingPage/>
      </div>
    </>
  )
}
