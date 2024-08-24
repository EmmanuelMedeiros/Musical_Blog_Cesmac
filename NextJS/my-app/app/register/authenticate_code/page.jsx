'use client'

import styles from '../../styles/authCode.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function AuthCodePage() {
    const searchParams = useSearchParams()
    const [message, setMessage] = useState("Ops!! Ocorreu algum erro aqui")
    const [success, setSuccess] = useState(false)

    async function authenticateUser() {
        const userCode = searchParams.get('code')
        console.log(userCode)

        if (!userCode) {
            setMessage("Código não fornecido")
            setSuccess(false)
            return
        }

        try {
            const result = await axios.put(`https://api-cesmusic.onrender.com/auth/validate-login-code/${userCode}`)
            console.log(result)
            setMessage("Você foi autenticado!!")
            setSuccess(true)
        } catch (err) {
            console.log(err)
            setMessage("Código inválido")
            setSuccess(false)
        }
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={`${success ? styles.success : styles.failure}`}>{message}</h1>
        </div>
    )
}