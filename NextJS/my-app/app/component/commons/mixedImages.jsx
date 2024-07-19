'use client'

import audio_software from '../../assets/audio_software.jpg'
import eletronic_comp from '../../assets/eletronic_comp.jpg'
import guy_with_a_guitar from '../../assets/guy_with_a_guitar.jpg'

import { useSpring, animated } from '@react-spring/web'

import { useState, useEffect } from 'react'

import Image from 'next/image'

export default function MixedImages(props) {

    const [springs, api] = useSpring(() => ({
        from: {x: 0}
    }))

    const onHoverAnimate = () => {

        api.start({
            from: {
                x: 0,
            },
            to: {
                x: 100
            }
        })
    }


    const [imageAWidth, setImageAWidth] = useState([300, false])
    const [imageBWidth, setimageBWidth] = useState([300, false])
    const [imageCWidth, setimageCWidth] = useState([300, false])

    const onMouseOverImgA = () => {
        setImageAWidth([400, true])
        setimageBWidth([180, false])
        setimageCWidth([180, false])
    } 

    const onMouseOverImgB = () => {
        setimageBWidth([400, true])
        setImageAWidth([180, false])
        setimageCWidth([180, false])
    } 

    const onMouseOverImgC = () => {
        setimageCWidth([400, true])
        setimageBWidth([180, false])
        setImageAWidth([180, false])
    } 

    const onMouseLeaveImg = () => {
            setImageAWidth([300, false])
            setimageBWidth([300, false])
            setimageCWidth([300, false])
    }

    return(
        <div className="mt-10 z-0"> 

                <div className='justify-center flex z-10 gap-2 flex-wrap hover:cursor-pointer'>
                    
                    <div onMouseOver={onMouseOverImgA} 
                         onMouseLeave={onMouseLeaveImg}
                        className={`relative flex justify-center z-10 gap-2 ${imageAWidth[1] ? '' : 'h-[27rem] mt-auto'}`}>
                        <Image
                            src={audio_software}
                            width={imageAWidth[0]}
                            placeholder='blur'
                            className={`rounded-3xl delay-200 ease-in-out duration-500 ${ imageAWidth[1] ? 'h-[29rem] translate-y-3' : ''} ${imageBWidth[1] || imageCWidth[1] ? 'blur-sm' : ''}`}
                        />

                        {imageBWidth[1] || imageCWidth[1]? 
                            <h1 className='opacity-0 transition-all absolute my-72 -ml-7 w-60 text-3xl text-white text-left'> </h1> :
                        imageAWidth[1] ? 
                            <h1 className='transition-all delay-300 duration-500 opacity-100 absolute my-72 translate-x-16 w-full text-3xl text-white'>Software de Áudio</h1>
                        :
                            <h1 className='ease-in-out delay-300 duration-500 transition-all opacity-100 absolute my-72 -ml-7 w-60 text-3xl text-white text-left'>Software de Áudio</h1>
                        }
                    </div>



                    <div
                        onMouseOver={onMouseOverImgB}
                        onMouseLeave={onMouseLeaveImg} 
                        className={`relative flex justify-center z-10 gap-2 ${imageBWidth[1] ? '' : 'h-[27rem]'} mt-auto`}>
                        <Image
                            src={eletronic_comp}
                            width={imageBWidth[0]}
                            placeholder='blur'
                            className={`rounded-3xl delay-200 ease-in-out duration-300 ${ imageBWidth[1] ? 'h-[29rem] translate-y-3' : ''} ${imageCWidth[1] || imageAWidth[1] ? 'blur-sm' : ''}`}
                        />

                        {imageAWidth[1] || imageCWidth[1]? 
                            <h1 className='opacity-0 transition-all absolute my-72 -ml-7 w-60 text-3xl text-white text-left'> </h1> :
                        imageBWidth[1] ? 
                            <h1 className='transition-all delay-300 duration-500 opacity-100 absolute my-72 translate-x-16 w-full text-3xl text-white'>Tecnologia musical</h1>
                        :
                            <h1 className='ease-in-out delay-300 duration-500 opacity-100 absolute my-72 -ml-7 w-60 text-3xl text-white text-left'>Tecnologia musical</h1>
                        }
                    </div>


                    <div
                        onMouseOver={onMouseOverImgC}
                        onMouseLeave={onMouseLeaveImg} 
                        className={`relative flex justify-center z-10 gap-2 ${imageCWidth[1] ? '' : 'h-[27rem]'} mt-auto`}>
                        <Image
                            src={guy_with_a_guitar}
                            width={imageCWidth[0]}
                            placeholder='blur'
                            className={`rounded-3xl delay-200 ease-in-out duration-300 ${ imageCWidth[1] ? 'h-[29rem] translate-y-3' : ''} ${imageBWidth[1] || imageAWidth[1] ? 'blur-sm' : ''}`}
                        />

                        {imageAWidth[1] || imageBWidth[1]? 
                            <h1 className='opacity-0 transition-all absolute my-72 -ml-7 w-60 text-3xl text-white text-left'> </h1> :
                        imageCWidth[1] ? 
                            <h1 className='transition-all delay-300 duration-500 opacity-100 absolute my-72 translate-x-8 w-full text-3xl text-white'>Composição eletrônica</h1>
                        :
                            <h1 className='ease-in-out delay-300 duration-500 transition-all opacity-100 absolute my-72 -ml-7 w-60 text-3xl text-white text-left'>Composição eletrônica</h1>
                        }
                    </div>
    
                </div>
            

        </div>
    )
}