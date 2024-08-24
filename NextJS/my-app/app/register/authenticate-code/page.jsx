'use client'

import styles from '../../styles/authCode.module.css'
import axios from 'axios'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function AuthCodeContent() {

    const searchParams = useSearchParams()
    const [message, setMessage] = useState("Autenticando...")
    const [success, setSuccess] = useState("")

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
            setMessage("Código inválido ou já usado")
            setSuccess(false)
        }
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={`${success === true ? styles.success : success === false ? styles.failure : null}`}>{message}</h1>
        </div>
    )
}


export default function AuthCodePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AuthCodeContent />
        </Suspense>
    )
}