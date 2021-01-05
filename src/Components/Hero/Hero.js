import React from 'react'

const Hero = ({animated}) => {
    const animateDisplay = animated === 'first' 
    const animateHide = animated === 'second' 
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
