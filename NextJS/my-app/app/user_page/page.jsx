'use client'

import styles from '../styles/userPage.module.css'
import stylesB from '../styles/pagePattern.module.css'

import { CiUser } from "react-icons/ci";

import { useState } from 'react';

import Link from 'next/link'
import Image from 'next/image'

const likedPosts = [
    {
        title: "Título A",
        contentPreview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non odit totam nam enim? ",
        date: "04/08/2024"
    },
    {
        title: "Título B",
        contentPreview: "Aliquam erat volutpat. Curabitur lacinia libero non libero sollicitudin, ac volutpat metus facilisis.",
        date: "01/08/2024"
    },
    {
      title: "Título C",
      contentPreview: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "24/07/2024"
    },
    {
      title: "Título D",
      contentPreview: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      date: "22/07/2024"
    }
]

export default function UserPage() {

    const [leftBarSelection, setLeftBarSelection] = useState(0)

    const [nameReadOnly, setNameReadOnly] = useState(false) 
    const [aboutReadOnly, setAboutReadOnly] = useState(false)


    const nameInputWrite = () => {
        nameReadOnly ? setNameReadOnly(false) : setNameReadOnly(true)
        document.getElementById("name").focus()

        const newName = document.getElementById("name").value
    }

    const aboutInputWrite = () => {
        aboutReadOnly ? setAboutReadOnly(false) : setAboutReadOnly(true)
        document.getElementById("about_user").focus()

        const newName = document.getElementById("about_user").value
    }

    return (
        <div className={styles.container}>

            <div className={`${styles.header}`}>

                <h1><Link href={'/'}>CesMusic</Link></h1>
                <CiUser id={styles.profile_icon}/>

            </div>

            <div className={`${styles.left_bar}`}>
                <h2 onClick={() => setLeftBarSelection(0)} className={`hover:cursor-pointer ${leftBarSelection == 0 ? 'underline' : null}`}>Sobre mim</h2>

                <h2 onClick={() => setLeftBarSelection(1)} className={`hover:cursor-pointer ${leftBarSelection == 1 ? 'underline' : null}`}>Meus posts</h2>

            </div>

            {leftBarSelection == 1 
                ? 
                    <div className={`${styles.middle_screen}`}>
                    {likedPosts.map((element, index) => (
    
                        <div key={index} className={`${styles.post}`}>
    
                            <div className={`${styles.title_and_text}`}>
                                <h1 className="font-semibold">{element.title}</h1>
                                <p>{element.contentPreview}</p>
                            </div>
    
                            <div className={styles.info_bellow}>
                                <button>
                                    <p>Acessar Publicação</p>
                                </button>
    
                                <p id={styles.owner_name}>Data: {element.date}</p>
                            </div>
    
                        </div>
                        ))}
                    </div>
                :
                    <div className={`${styles.middle_screen} py-8 pl-6`}>

                        
                        <div className='flex justify-start gap-3'>
                            <label htmlFor="name">
                                <h1 className='w-20'>Nome: </h1>
                            </label>
                            <input 
                                type="text" 
                                name="" 
                                id="name" 
                                readOnly={false} 
                                value={nameReadOnly ? null : "Emmanuel"}
                                className='border-solid ml-2 border-gray-500 border-2 rounded-md px-3'
                            />

                            <button  
                                onClick={nameInputWrite}
                                className="bg-slate-700 rounded-md px-4 text-white">
                                    {nameReadOnly ? "Aplicar" : "Alterar"}
                            </button>
                        </div>

                        <div className='flex justify-start gap-3 mt-5'>
                            <label htmlFor="email">
                                <h1 className='w-20'>Email: </h1>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                readOnly={true} 
                                value={"Emmanuel@hotmail.com"}
                                className='border-solid ml-2 border-gray-500 border-2 rounded-md px-3'
                            />
                        </div>

                        <div className='flex justify-start gap-3 mt-5'>
                            <label htmlFor="password">
                                <h1 className='w-20'>Senha: </h1>
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                readOnly={true} 
                                value={"Minha senha"}
                                className='border-solid ml-2 border-gray-500 border-2 rounded-md px-3'
                            />
                        </div>

                        <div className='flex justify-start gap-3 mt-5'>
                            <label htmlFor="about">
                                <h1 className='w-20'>About: </h1>
                            </label>
                            <textarea
                                id={"about_user"}
                                value={aboutReadOnly ? null : "das dlaskdnj aslkdn askldj aslkdj aslkdj aslkdj aslkdj aslkdj alsçkdj alskdj aslkdj aslkdj as"}
                                className='border-solid ml-2 border-gray-500 border-2 rounded-md px-3 h-[10rem] text-start'
                            />
                            <button  
                                onClick={aboutInputWrite}
                                className="bg-slate-700 rounded-md px-4 h-8 my-auto text-white">
                                    {aboutReadOnly ? "Aplicar" : "Alterar"}
                            </button>
                        </div>


                    </div>}


        </div>
    )
}