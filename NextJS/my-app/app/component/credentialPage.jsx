'use client'

import styles from '../styles/credentialPage.module.css'
import Link from 'next/link'

import { useEffect, useState } from 'react'

import { CiUnread } from "react-icons/ci";
import { CiRead } from "react-icons/ci";



export default function CredentialPage(props) {

    const [pwdConfirmation, setPwdConfirmation] = useState("")
    const [pwdMatch, setPwdMatch] = useState(true)

    const [seePWD, setSeePWD] = useState(false)


    const onHandleKeepRegisterData = (data) => {
        data.preventDefault()

        const userFullName = data.target[0].value
        const userEmail = data.target[1].value
        const userPwd = data.target[2].value
        const userPwdConfirmation = data.target[3].value

        if(userPwdConfirmation !== userPwd) {
            setPwdMatch(false)
        }

        console.log(data)
    }

    return (
        <div className={`${styles.container}`}>

            <h1 id={styles.logo_text}><Link href={'/'}>CesMusic</Link></h1>

            <form onSubmit={(data) => onHandleKeepRegisterData(data)} 
            className={`${styles.credential_area} ${props.register ? styles.registrating : styles.registrating}`}>
                <h1>{props.register ? "Faça seu registro" : "Entre na sua conta"}</h1>                

                {props.register 
                    ?
                        <input 
                            className={`${styles.input_box} ${styles.full_name_input}`}
                            type="text" 
                            name="fullName" 
                            id="fullName" 
                            placeholder='Full name'
                            maxLength={30}
                        />
                    :
                        null
                }    

                <input 
                    className={`${styles.input_box} ${styles.email_input} ${props.register ? styles.registrating : null}`}
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Email'
                    required={true}
                />

                <div className={`${styles.pwd_div} ${!pwdMatch ? styles.not_match : null}`}>
                
                    <input 
                        onClick={() => setPwdMatch(true)}
                        className={`${styles.input_box}`}
                        type={`${seePWD ? "text" : "password"}`} 
                        name="password" 
                        id="password" 
                        placeholder='Password'
                        maxLength={12}
                        required={true}
                    />

                    {!seePWD 
                        ? 
                            <CiRead
                                onClick={() => setSeePWD(true)} 
                                className='mt-3 text-2xl'
                            />
                        :
                            <CiUnread 
                                onClick={() => setSeePWD(false)}
                                className='mt-3 text-2xl'/> }

                    {!pwdMatch
                        ? 
                            <p>As senhas não coincidem</p>
                        :
                            null
                    }

                </div>

                {props.register 
                    ?
                        <p>Max of 12 characters</p>
                    :
                        null
                }

                {props.register 
                    ?
                        <input 
                            onChange={(event) => setPwdConfirmation(event.target.value)}
                            className={`${styles.input_box}`}
                            type={`${seePWD ? "text" : "password"}`}  
                            name="passwordConfirmation" 
                            id="passwordConfirmation" 
                            placeholder='Password Confirmation'
                            maxLength={12}
                            required={true}
                        />
                    :
                        null
                }       


                {props.register 
                    ?
                        <button 
                        type="submit"
                        id={`${styles.credential_bttn}`}>
                            Registrar 
                        </button>
                    :
                        <button 
                        type="submit"
                        id={`${styles.credential_bttn}`}>
                            Login
                        </button>
                }
                
                {props.register 
                    ? 
                        <h2>Já é cadastrado? Faça seu <span id={`${styles.credential_span}`}><Link href={'/login'}>login aqui</Link></span></h2> 
                    :
                        <h2>Quer se registrar? <span id={`${styles.credential_span}`}><Link href={'/register'}>Clique aqui</Link></span></h2>
                    }
            </form>

        </div>
    )
}