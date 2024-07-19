import AnimatedImages from "./commons/animatedImgs";
import MixedImages from "./commons/mixedImages";
import { Kodchasan } from "next/font/google";

export default function IntroductionPage() {

    return(
        <div>
            <div className="flex flex-col">
                <h1 className="text-2xl text-white text-center -mb-6 z-20 font-kodchasan tracking-wide">Por onde quer começar a estudar?</h1>
                <AnimatedImages/>
            </div>
        </div>
    )
}