'use client'

import { useEffect, useState } from 'react'
import PagePattern from '../../component/pagePattern'
import { useRouter } from 'next/navigation'

import styles from '../../styles/pagePattern.module.css'

export default function MusicalTecnologyPage(params) {

    const [reload, setReload] = useState(true)
    const router = useRouter()


    return(
        <div>            
            <PagePattern
                welcomeText="🖐️ Tudo Bem?"
                linearGradient='linear-gradient(45deg, #EBEBEB, #A8DAE2, #E75757)'
                detailsColorA='#6AB8C5'
                detailsColorB='#E75757'
            />
        </div>
    )
}

