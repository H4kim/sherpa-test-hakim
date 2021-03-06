import React, {useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalContext'
import { ANIMATION_STEPS } from '../../Utils/Constants'

const Hero = () => {
    const GlobalCont = useContext(GlobalContext)
    const animated = GlobalCont.values.animate
    
    const animateDisplay = animated === ANIMATION_STEPS.step1
    const animateHide = animated === ANIMATION_STEPS.step2
    const styles={
        container: {
            width:'100vw',
            height: '.1rem',
            opacity:'0',
            backgroundColor:'#ACADAA',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            transition:'all .5s ease',
        },
        animated : {
            transform: animateDisplay ? 'scaleY(200)' : animateHide ? 'scaleY(-20)' : null,
            transformOrigin: 'top',
            opacity:animateDisplay ? '1' : '0',
         }
    }
    return (
        <div style={{...styles.container,...styles.animated}}>
            
        </div>
    )
}

export default Hero
