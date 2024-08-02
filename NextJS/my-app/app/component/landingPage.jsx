'use client'

import audioSoftware from '../assets/audio_software.jpg' 
import eletronicComp from '../assets/eletronic_comp.jpg' 
import guyWithAGuitar from '../assets/guy_with_a_guitar.jpg' 

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Link from 'next/link'

import styles from '../styles/landingPage.module.css'

export default function LandingPage() {

    const [screenWidth, setScreenWidth] = useState(0)
    const router = useRouter();

    const onHandleGotoPage = () => {
        if(screenWidth > 768) {
            router.push('/audio_software/post?page=1')
        }
    }

    const handleScreenResize = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        try {
            setScreenWidth(window.innerWidth)
            window.addEventListener('resize', handleScreenResize)      
        } catch(err) {
            
        }
    }, [])


    return(
        <div>
            <h1 id={`${styles.logo_text}`}>CesMusic</h1>
            <h1 id={`${styles.message_text}`} className='text-center text-white text-2xl tracking-wider'>Por onde quer começar a estudar?</h1>
            <div className={`${styles.container}`}>
                    <div className={`${styles.box} ${styles.box_1}`}
                         onClick={onHandleGotoPage}>
                        <p>Audio Software</p>
                    </div>

                <div className={`${styles.box} ${styles.box_2}`}>
                    <p>Tecnologia Musical</p>
                </div>

                <div className={`${styles.box} ${styles.box_3}`}>
                    <p>Composição Eletrônica</p>
                </div>
                
            </div>
        </div>
    )
}