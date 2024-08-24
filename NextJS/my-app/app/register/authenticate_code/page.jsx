'use client'

import styles from '../../styles/authCode.module.css'
import axios from 'axios'

import { useState, useEffect } from 'react'

export default function AuthCodePage(params) {

    const [userParam, setUserParm] = useState(params)
    const [message, setMessage] = useState("Ops!! Ocorreu algum erro aqui")
    const [success, setSuccess] = useState(0)

    async function authenticateUser(userParam) {

        const userCode = userParam.searchParams.code

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
        authenticateUser(userParam)
    }, [])

    return(
        <div className={styles.container}>
            <h1 className={`${success ? styles.success : styles.failure}`}>{message}</h1>
        </div>
    )
}