'use client'

import audioSoftware from '../assets/audio_software.jpg' 
import eletronicComp from '../assets/eletronic_comp.jpg' 
import guyWithAGuitar from '../assets/guy_with_a_guitar.jpg' 

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Link from 'next/link'

import styles from '../styles/landingPage.module.css'

export default function LandingPage() {

    const [activateBoxA, setActivateBoxA] = useState(false)
    const [activateBoxB, setActivateBoxB] = useState(false)
    const [activateBoxC, setActivateBoxC] = useState(false)


    const [screenWidth, setScreenWidth] = useState(0)
    const router = useRouter();

    const onHandleGoToAudioSoftware = () => {
        if(screenWidth > 768 || activateBoxA) {
            router.push('/audio_software/post?page=1')
        } else {
            setActivateBoxA(true)
        }
    }

    const onHandleGoToMusicalTec = () => {
        if(screenWidth > 768 || activateBoxB) {
            router.push('/audio_software/post?page=1')
        }else {
            setActivateBoxB(true)
        }

        console.log("cai aqui")
    }

    const onHandleGoToEletronicComp = () => {
        if(screenWidth > 768) {
            router.push('/audio_software/post?page=1')
        }else {
            setActivateBoxC(true)
        }
    }

    const onHandleExitGoTos = () => {
        setActivateBoxA(false)
        setActivateBoxB(false)
        setActivateBoxC(false)
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

    useEffect(() => {
        if(screenWidth > 768) {
            onHandleExitGoTos
        }
    }, [screenWidth])


    return(
        <div className={`${styles.everything} 
        ${activateBoxA ? styles.background_a 
            :
          activateBoxB ? styles.background_b
            :
          activateBoxC ? styles.background_c
            :
          null}`}>
            <h1 id={`${styles.logo_text}`}>CesMusic</h1>
            <h1 
                id={`${styles.message_text}`} 
                className='text-center text-white text-2xl tracking-wider'>
                {activateBoxA ? "Audio Software" 
                 : 
                activateBoxB ? "Tecnologia Musical" 
                 :
                activateBoxC ? "Composição Eletrônica" 
                 :
                "Por onde quer começar a estudar?"}
            </h1>

            <div className={`${styles.container}`}>
            {activateBoxA || activateBoxB || activateBoxC ? <span onClick={onHandleExitGoTos} id={styles.close_box}>X</span> : null}
                
                <div className={`${styles.box} ${styles.box_1} ${activateBoxA ? styles.activated_box : null}`}
                     onClick={onHandleGoToAudioSoftware}>
                    <p>Audio Software</p>
                </div>

                <div className={`${styles.box} ${styles.box_2} ${activateBoxB ? styles.activated_box : null}`}
                     onClick={onHandleGoToMusicalTec}>
                    <p>Tecnologia Musical</p>
                </div>

                <div className={`${styles.box} ${styles.box_3} ${activateBoxC ? styles.activated_box : null}`}
                     onClick={onHandleGoToEletronicComp}>
                    <p>Composição Eletrônica</p>
                </div>
                
            </div>

        <footer className='text-center -mb-8 pt-7 text-white'>
            @2024 CesMusic
        </footer>

        </div>
    )
}