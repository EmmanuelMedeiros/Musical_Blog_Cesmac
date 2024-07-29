'use client'

import { useEffect, useState } from 'react'
import PagePattern from '../../component/pagePattern'
import { useRouter } from 'next/navigation'

import '../../styles/loading.css'

export default function AudioSoftwarePage(params) {

    const router = useRouter()

    useEffect(() => {
        if(params.searchParams.reload == 'true') {
            setTimeout(() => {
                window.location.reload()
            }, 600)
            router.push('/audio_software/post?page=1')
        }
    
    }, [])

    return(
        <div>            
            <PagePattern 
                linearGradient='linear-gradient(45deg, #D870DA, #44B6D5, #6BD167)'
                detailsColorA='#4EBDBA'
                detailsColorB='#D870DA'
            />
        </div>
    )
}

