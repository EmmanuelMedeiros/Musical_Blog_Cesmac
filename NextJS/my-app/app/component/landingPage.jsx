import audioSoftware from '../assets/audio_software.jpg' 
import eletronicComp from '../assets/eletronic_comp.jpg' 
import guyWithAGuitar from '../assets/guy_with_a_guitar.jpg' 


import '../styles/landingPage.css'

export default function LandingPage() {
    return(
        <div>
            <div className="container">
                <div className="box box-1">
                    <p>Audio Software</p>
                </div>

                <div className='box box-2'>
                    <p>Tecnologia Musical</p>
                </div>

                <div className='box box-3'>
                    <p>Composição Eletrônica</p>
                </div>
            </div>
        </div>
    )
}