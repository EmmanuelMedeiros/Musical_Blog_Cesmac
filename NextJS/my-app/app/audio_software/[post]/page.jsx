'use client'

import { useEffect, useState } from 'react'
import PagePattern from '../../component/pagePattern'
import { useRouter } from 'next/navigation'

import styles from '../../styles/pagePattern.module.css'

export default function AudioSoftwarePage(params) {

    const [reload, setReload] = useState(true)
    const router = useRouter()


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

