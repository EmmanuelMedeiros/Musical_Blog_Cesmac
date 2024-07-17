'use client'

import HeaderMenu from './headerMenu'
import MixedImages from './commons/mixedImages';

import Image from 'next/image'
import logo from '../assets/logo.jpg'

import { LuXCircle } from "react-icons/lu";
import { LuAlignJustify } from "react-icons/lu";

import {useState, useEffect} from 'react'
import MusicalTec from './musicalTec';


export default function PageHeader() {

    const [menuState, setMenuState] = useState('closed')

    const onHandleToggleMenu = () => {
        if(menuState === 'closed') {
            setMenuState('oppened')
        } else {
            setMenuState('closed')
        }
    }

    return(
        <div>

            <div className='flex align-middle justify-between mx-4 -mb-3'>
                <div className='flex align-middle mt-2'>
                    <Image
                        src={logo}
                        width={50}
                        height={50}
                        className='rounded-xl'
                    />
                    <h1 className='text-center mt-3 ml-2 font-medium'>CesMusic</h1>
                </div>

                {menuState == 'closed' 
                ? 
                <LuAlignJustify 
                    onClick={onHandleToggleMenu}
                    className='w-5 h-5 mt-5 hover:cursor-pointer'/> 
                :
                <LuXCircle 
                    onClick={onHandleToggleMenu}
                    className='w-5 h-5 mt-5 hover:cursor-pointer'/>
            }
                
            </div>

            {menuState == 'oppened' 
                ? 
                <HeaderMenu/> 
                :
                null
            }

        </div>
    )
}