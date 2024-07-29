'use client'

import Link from 'next/link'
import '../styles/pagePattern.css'

import Image from 'next/image'
import { CiPlay1 } from "react-icons/ci";
import { useEffect, useState } from 'react';



export default function PagePattern(props) {

    const [reloadPage, setReloadPage] = useState(true)

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
        }
    ]

    useEffect(() => {
        console.log(props.loading)
    }, [])

    return(
        <div>
            <div className="container" 
                style={pageStyle}>

                <div className="header" >
                    <Link href="/">
                        <h1 id="logo_text" className='font-semibold'>CesMusic</h1>
                    </Link>

                    <h2>🤘Olá!</h2>

                    <div className="input_block">
                        <input 
                            type="text" 
                            name="search" 
                            id="search" 
                            placeholder="Pesquise alguma postagem aqui" 
                        />

                        <button>
                            <CiPlay1 className='text-xl'/>
                        </button>

                    </div>

                </div>

                {postList.map((element, index) => (
                    <div className={`post ${index % 2 == 0 ? 'postA' : 'postB'}`} key={element.id}>

                        <div  className="title_and_text">
                            <h1 className='font-semibold'>{element.title}</h1>
                            <p>{element.textPreview}</p>
                        </div>

                        <div  className="info_bellow">
                            <button>
                                <p>Acessar Publicação</p>
                            </button>

                            <p id='owner_name'>Post feito por {element.postOwner}</p>
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