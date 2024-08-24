'use client'

import styles from '../../styles/authCode.module.css'
import axios from 'axios'

import { useState, useEffect } from 'react'

export default function AuthCodePage(params) {

    const myParams = params

    const [message, setMessage] = useState("Ops!! Ocorreu algum erro aqui")
    const [success, setSuccess] = useState(0)

    async function authenticateUser(myParams) {

        const userCode = myParams.searchParams.code
        console.log(userCode)

        const result = await axios.put(`https://api-cesmusic.onrender.com/auth/validate-login-code/${userCode}`)
        .then((result) => {
            console.log(result)
            setMessage("Você foi autenticado!!")
            setSuccess(true)
        })
        .catch((err) => {
            console.log(err)
            setMessage("Código inválido")
            setSuccess(false)
        })

        console.log(result)

    }

    
    useEffect(() => {
        authenticateUser(myParams)
    }, [])

    return(
        <div className={styles.container}>
            <h1 className={`${success ? styles.success : styles.failure}`}>{message}</h1>
        </div>
    )
}