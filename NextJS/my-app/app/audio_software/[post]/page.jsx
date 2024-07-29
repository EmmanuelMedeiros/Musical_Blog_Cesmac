'use client'

import { useEffect } from 'react'
import PagePattern from '../../component/pagePattern'
import { useRouter, useState } from 'next/navigation'

export default function AudioSoftwarePage(params) {

    //const [reloadPage, setReloadPage] = useState()

    const router = useRouter()

    useEffect(() => {
        if(params.searchParams.reload == 'true') {
            setTimeout(() => {
                window.location.reload()
            }, 100)
            router.push('/audio_software/post?page=1')
        }
    
    })


    return(
        <div >
            <PagePattern/>
        </div>
    )
}

