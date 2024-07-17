import IntroductionPage from "./component/introductionPage"
import { Kodchasan } from 'next/font/google'

const kodchasan = Kodchasan ({
  subsets: ['latin'],
  variable: '--font-kodchasan',
  weight: '400'
})

export default function Home() {

  return(
    <>
      <div className={`bg-[url('../public/introduction_background.png')] absolute top-0 w-full h-screen`}>
        
        <div className="h-screen w-full absolute flex justify-center items-center left-0 right-0">
          <IntroductionPage/>
        </div>
      </div>
    </>
  )
}
