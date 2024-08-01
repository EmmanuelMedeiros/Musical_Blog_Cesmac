'use client'

import audioSoftware from '../assets/audio_software.jpg' 
import eletronicComp from '../assets/eletronic_comp.jpg' 
import guyWithAGuitar from '../assets/guy_with_a_guitar.jpg' 

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Link from 'next/link'

import '../styles/landingPage.css'

export default function LandingPage() {

    try {
        const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    }catch(err) {
        null
    }
    const router = useRouter();

    const onHandleGotoPage = () => {
        if(screenWidth > 768) {
            router.push('/audio_software/post?page=1&reload=true')
        }
    }

    const handleScreenResize = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        try {
            window.addEventListener('resize', handleScreenResize)      
        } catch(err) {
            
        }
    }, [])


    return(
        <div>
            <h1 id='logo_text'>CesMusic</h1>
            <h1 id='message_text' className='text-center text-white text-2xl tracking-wider'>Por onde quer começar a estudar?</h1>
            <div className="container">
                    <div className="box box-1"
                         onClick={onHandleGotoPage}>
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