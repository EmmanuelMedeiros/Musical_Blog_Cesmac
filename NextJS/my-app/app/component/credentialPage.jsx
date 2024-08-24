'use client'

import styles from '../styles/credentialPage.module.css'
import Link from 'next/link'

import { useEffect, useState } from 'react'

import { CiUnread } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

import axios  from 'axios';



export default function CredentialPage(props) {

    const [pwdConfirmation, setPwdConfirmation] = useState("")
    const [pwdMatch, setPwdMatch] = useState(true)

    const [loadingRegister, setLoadingRegister] = useState(false)
    const [sucessfulRegister, setSucessFulRegister] = useState(0) //0 - nada; 1 - sucesso; 2 - falha
    const [errorMsg, setErrorMsg] = useState("")
    const [sucessMsg, setSucessMsg] = useState("")

    const [seePWD, setSeePWD] = useState(false)


    async function onHandleKeepRegisterData(data) {
        data.preventDefault()
        setSucessFulRegister(0)
        setErrorMsg("")
        setSucessMsg("")

        const userFullName = data.target[0].value
        const userEmail = data.target[1].value
        const userPwd = data.target[2].value
        const userPwdConfirmation = data.target[3].value

        if(userPwdConfirmation !== userPwd) {
            setPwdMatch(false)
            return
        }

        setLoadingRegister(true)

        const register = await axios.post(`https://api-cesmusic.onrender.com/auth/register`, {
            fullName: userFullName.toString(),
            login: userEmail.toString(),
            password: userPwd.toString()
        })
        .then((data) => {
            console.log(data)
            setLoadingRegister(false)
            setSucessFulRegister(1)
            setSucessMsg("Usuário criado com sucesso!")
        })
        .catch((error) => {
            console.log(error)
            setLoadingRegister(false)
            setSucessFulRegister(2)
            setErrorMsg(error.response.data.message)
        })

    }

    return (
        <div className={`${styles.container}`}>

            <h1 id={styles.logo_text}><Link href={'/'}>CesMusic</Link></h1>

            <h1 className='text-red-500 left-1/2 transform -translate-x-1/2 -mt-56 absolute'>{errorMsg}</h1>
            <h1 className='text-green-400 left-1/2 transform -translate-x-1/2 -mt-56 absolute'>{sucessMsg}</h1>

            <form onSubmit={(data) => onHandleKeepRegisterData(data)} 
            className={`${styles.credential_area} ${props.register ? styles.registrating : null} ${loadingRegister ? styles.loading_inputs : null}`}>
                <h1 id={props.register ? styles.register_title : null}>{props.register ? "Faça seu registro" : "Entre na sua conta"}</h1>                

                {props.register 
                    ?
                        <input 
                            className={`${styles.input_box} ${styles.full_name_input}`}
                            type="text" 
                            name="fullName" 
                            id="fullName" 
                            placeholder='Full name'
                            maxLength={30}
                            disabled={loadingRegister ? true : false}
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
                    disabled={loadingRegister ? true : false}
                />

                <div className={`${styles.pwd_div} ${!pwdMatch ? styles.not_match : null}`}>
                
                    <input 
                        onClick={() => setPwdMatch(true)}
                        className={`${styles.input_box}`}
                        type={`${seePWD ? "text" : "password"}`} 
                        name="password" 
                        id="password" 
                        placeholder='Password'
                        maxLength={20}
                        required={true}
                        disabled={loadingRegister ? true : false}
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
                        <p>Max of 20 characters</p>
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
                            maxLength={20}
                            required={true}
                            disabled={loadingRegister ? true : false}
                        />
                    :
                        null
                }       


                {props.register 
                    ?
                        <button 
                        type="submit"
                        id={`${styles.credential_bttn}`}>
                           {`${sucessfulRegister == 1 && !loadingRegister? 'Registrado!' : ''}`}
                           {`${loadingRegister && sucessfulRegister == 0 ? 'Registrando...' : sucessfulRegister == 0 ? 'Registrar' : ""}`} 
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