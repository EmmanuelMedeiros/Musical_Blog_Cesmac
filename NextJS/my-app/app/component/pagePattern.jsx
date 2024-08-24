'use client'

import Link from 'next/link'


import { CiPlay1 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import Image from 'next/image'
import { useEffect, useState } from 'react';

import styles from '../styles/pagePattern.module.css'

export default function PagePattern(props) {

    const [searching, setSearching] = useState(false)

    const onHandleSearching = (element) => {

        console.log(element)

        console.log(element.target.value)

        if(element.target.value.trim() != "" && typeof element.target.value.trim() == "string") {
            setSearching(true)
        } else{
            setSearching(false)
        }
    }

    const pageStyle = {
        "--logo-gradient": props.linearGradient,
        "--details-color-a": props.detailsColorA,
        "--details-color-b": props.detailsColorB
    }    

    const postList = [
        {
            title: 'TítuloA',
            textPreview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi labore quae, minima necessitatibus facere quaerat eum itaque 
            voluptates qui laudantium dolore reprehenderit voluptate libero 
            omnis ad quod nulla! Culpa, sit.`,
            imagePreview: 'img',
            postOwner: 'nome sobrenome',
            createdAt: '28/07/2024',
            id: 1
        },
        {
            title: 'TítuloB',
            textPreview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi labore quae, minima necessitatibus facere quaerat eum itaque 
            `,
            imagePreview: 'img',
            postOwner: 'teste dois da silva',
            createdAt: '28/07/2024',
            id: 2
        },
        {
            title: 'TítuloC',
            textPreview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi labore quae, minima necessitatibus facere quaerat eum itaque 
            dasd asd fasdf asd ei jdasw `,
            imagePreview: 'img',
            postOwner: 'teste três da silva',
            createdAt: '28/07/2024',
            id: 3
        }
    ]

    useEffect(() => {
        console.log(props.loading)
    }, [])

    return(
        <div>
            <div className={styles.container} 
                style={pageStyle}>
                <div className={styles.header}>
                    <Link href="/">
                        <h1 id={styles.logo_text} className='font-semibold'>CesMusic</h1>
                    </Link>

                    <h2>{props.welcomeText}</h2>

                    <div className={styles.input_block}>
                        <input 
                            onChange={(element) => onHandleSearching(element)}
                            type="text" 
                            name="search" 
                            id={styles.search} 
                            placeholder="Pesquise alguma postagem aqui" 
                        />
                        
                        <button>
                            <CiPlay1 id={styles.play} className={`text-xl transition-all duration-500 ${searching ? styles.show : styles.not_show}`}/>
                            <div id={styles.circle} className={`${!searching ? styles.show : styles.not_show}`}></div>    
                        </button>

                    </div>

                </div>

                {postList.map((element, index) => (
                    <div className={`${styles.post} ${index % 2 == 0 ? styles.postA : styles.postB}`} key={element.id}>

                        <div  className={styles.title_and_text}>
                            <h1 className='font-semibold'>{element.title}</h1>
                            <p>{element.textPreview}</p>
                        </div>

                        <div  className={styles.info_bellow}>
                            <button>
                                <p>Acessar Publicação</p>
                            </button>

                            <div className={`${styles.likes_and_owner}`}>

                                <p id={styles.owner_name}>Post feito por {element.postOwner}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}

            </div>
        </div>
    )
}


                    
{/* 
<div 
    onKeyDown={(event) => onHandleArea(event)}
    contentEditable
    className='h-40 w border-red-500 border-solid border-x-2 w-1/2 border-y-2'>
</div>


async function onHandleArea(event) {

    if(event.key == 'd') {
        event.target.innerHTML = event.target.innerHTML + " " + await `<Image src='' width={100} height={20}/>` + '<br/>'
    }
} */}