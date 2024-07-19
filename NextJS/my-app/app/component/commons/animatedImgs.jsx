'use client'

import audio_software from '../../assets/audio_software.jpg'
import eletronic_comp from '../../assets/eletronic_comp.jpg'
import guy_with_a_guitar from '../../assets/guy_with_a_guitar.jpg'

import { useSpring, animated } from '@react-spring/web'

import { useState, useEffect } from 'react'

import Image from 'next/image'

export default function AnimatedImages(props) {

    const [activateHoverA, setactivateHoverA] = useState(true)
    const [activateLeaveA, setActivateLeaveA] = useState(false)

    const [activateHoverB, setactivateHoverB] = useState(true)
    const [activateLeaveB, setActivateLeaveB] = useState(false)

    const [activateHoverC, setactivateHoverC] = useState(true)
    const [activateLeaveC, setActivateLeaveC] = useState(false)

    const [blurA, setBlurA] = useState(false)
    const [blurB, setBlurB] = useState(false)
    const [blurC, setBlurC] = useState(false)

    const [springs, api] = useSpring(() => ({
        from: {
            y: 0,
            x: 0,
            width: 300,
            height: 450,
            marginRight: 0,
        }
    }))

    const onHoverAnimateA = () => {

        if(activateHoverA) {

            api.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 300,
                },
                to: {
                    y: -10,
                    height: 500,
                    width: 350,
                    x: 20,
                }
            })

            
            apiB.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 300
                },
                to: {
                    y: -10,
                    height: 420,
                    width: 200,
                }
            })

            apiC.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 300
                },
                to: {
                    y: -10,
                    height: 420,
                    width: 200,
                    blur: 100,
                    x: -10
                }
            })

            setBlurB(true)
            setBlurC(true)

            setactivateHoverA(false)
            setActivateLeaveA(true)
        }

    }

    const onHoverTurnABack = () => {

        if(activateLeaveA) {

            setActivateLeaveA(false)

            api.start({
                from: {
                    y: -10,
                    height: 500,
                    width: 350
                },
                to: {
                    y: 0,
                    height: 450,
                    width: 300,
                    x: 0
                }
            })

            apiB.start({
                from: {
                    y: -10,
                    height: 420,
                    width: 200,
                    x: -10
                },
                to: {
                    y: 0,
                    height: 450,
                    width: 300,
                    x: 0
                }
            })

            apiC.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 200,
                },
                to: {
                    y: 0,
                    height: 450,
                    width: 300,
                }
            })


            setBlurB(false)
            setBlurC(false)
        }

    }
    

    const [springsB, apiB] = useSpring(() => ({
        from: {
            y: 0,
            x: 0,
            width: 300,
            height: 450,
            marginLeft: 0,
            marginRight: 0
        }
    }))

    const onHoverAnimateB = () => {

        if(activateHoverB) {
            apiB.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 300,
                    marginRight: 0,
                    marginLeft: 0
                },
                to: {
                    y: -10,
                    height: 500,
                    width: 350,
                    marginRight: -10,
                    marginLeft: -10
                }
            })

            api.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 300
                },
                to: {
                    y: -10,
                    height: 420,
                    width: 200,
                }
            })

            apiC.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 300
                },
                to: {
                    y: -10,
                    height: 420,
                    width: 200,
                    blur: 100
                }
            })

            setBlurA(true)
            setBlurC(true)

            setactivateHoverB(false)
            setActivateLeaveB(true)
        }
    }

    const onHoverTurnBBack = () => {

        if(activateLeaveB) {

            setActivateLeaveB(false)

            apiB.start({
                from: {
                    y: -10,
                    height: 500,
                    width: 350,
                    marginRight: -10,
                    marginLeft: -10
                },
                to: {
                    y: 0,
                    height: 450,
                    width: 300,
                    x: 0,
                    marginRight: 0,
                    marginLeft: 0
                }
            })

            api.start({
                from: {
                    y: -10,
                    height: 420,
                    width: 200,
                    x: -10
                },
                to: {
                    y: 0,
                    height: 450,
                    width: 300,
                    x: 0
                }
            })

            apiC.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 200,
                },
                to: {
                    y: 0,
                    height: 450,
                    width: 300,
                }
            })


            setBlurA(false)
            setBlurC(false)
        }

    }
    const [springsC, apiC] = useSpring(() => ({
        from: {
            y: 0,
            x: 0,
            width: 300,
            height: 450,
            marginLeft: 0,
        }
    }))

    const onHoverAnimateC = () => {

        if(activateHoverC) {

            apiC.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 300,
                    x: 0
                },
                to: {
                    y: -10,
                    height: 500,
                    width: 350,
                    x: -20,
                }
            })

            apiB.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 300
                },
                to: {
                    y: -10,
                    height: 420,
                    width: 200,
                    x: -10
                }
            })

            api.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 300
                },
                to: {
                    y: -10,
                    height: 420,
                    width: 200,
                    blur: 100
                }
            })

            setBlurA(true)
            setBlurB(true)

            setactivateHoverC(false)
            setActivateLeaveC(true)
        }
    }

    const onHoverTurnCBack = () => {

        if(activateLeaveC) {

            setActivateLeaveC(false)

            apiC.start({
                from: {
                    y: -10,
                    height: 500,
                    width: 350,
                    x: -20,
                },
                to: {
                    y: 0,
                    x: 0,
                    width: 300,
                    height: 450,
                },
            })

            apiB.start({
                from: {
                    y: -10,
                    height: 420,
                    width: 200,
                    x: -10
                },
                to: {
                    y: 0,
                    height: 450,
                    width: 300,
                    x: 0
                }
            })

            api.start({
                from: {
                    y: 0,
                    height: 450,
                    width: 200,
                },
                to: {
                    y: 0,
                    height: 450,
                    width: 300,
                }
            })

            setBlurA(false)
            setBlurB(false)
        }
    }


    useEffect(() => {
        setTimeout(() => {
            setactivateHoverA(true)
        }, [600])
    }, [activateHoverA])

    useEffect(() => {
        setTimeout(() => {
            setactivateHoverB(true)
        }, [600])
    }, [activateHoverB])

    useEffect(() => {
        setTimeout(() => {
            setactivateHoverC(true)
        }, [600])
    }, [activateHoverC])

    return(

        <div className="mt-10 z-0"> 

                <div className='justify-center flex z-10 gap-5 flex-wrap hover:cursor-pointer'>
                    

                    <animated.div
                        className={`relative flex justify-center z-10 gap-2 my-auto`}
                        onMouseEnter={onHoverAnimateA}
                        onMouseLeave={onHoverTurnABack}
                        style={{...springs}}>

                        <Image
                            src={audio_software}
                            width={350}
                            placeholder='blur'
                            className={`rounded-3xl ${blurA ? 'blur-md' : ''}`}
                        />

                    </animated.div>

                        
                    <animated.div 
                        className={`relative flex justify-center z-10 gap-2 my-auto`}
                        onMouseEnter={onHoverAnimateB}
                        onMouseLeave={onHoverTurnBBack}
                        style={{...springsB}}>

                        <Image
                            src={eletronic_comp}
                            width={350}
                            placeholder='blur'
                            className={`rounded-3xl ${blurB ? 'blur-md' : ''}`}
                        />


                    </animated.div>


                    <animated.div
                         className={`relative flex justify-center z-10 gap-2 my-auto`}
                         onMouseEnter={onHoverAnimateC}
                         onMouseLeave={onHoverTurnCBack}
                         style={{...springsC}}>
                        
                       
                        <Image
                            src={guy_with_a_guitar}
                            width={350}
                            placeholder='blur'
                            className={`rounded-3xl ${blurC ? 'blur-md' : ''}`}
                        />

                        </animated.div>
    
                </div>
            </div>

    )
}