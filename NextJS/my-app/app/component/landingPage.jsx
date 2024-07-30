import audioSoftware from '../assets/audio_software.jpg' 
import eletronicComp from '../assets/eletronic_comp.jpg' 
import guyWithAGuitar from '../assets/guy_with_a_guitar.jpg' 

const path = require('path')

import Link from 'next/link'

import '../styles/landingPage.css'

export default function LandingPage() {

    return(
        <div>
            <h1 className='text-center mb-2 text-white text-2xl tracking-wider'>Por onde quer começar a estudar?</h1>
            <div className="container">
                <Link class='box-1' href="/audio_software/post?page=1&reload=true">
                    <div className="box box-1">
                        <p>Audio Software</p>
                    </div>
                </Link>

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