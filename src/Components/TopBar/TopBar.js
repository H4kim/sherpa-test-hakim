// import classes from './TopBar.module.css';
import React from 'react'

const TopBar = ({title,clicked,animated}) => {
    const animateDisplay = animated === 'first' 
    const animateHide = animated === 'second' 
    const styles = {
        container : {
            backgroundColor: '#eaeae8',
            height:'2.2rem',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            cursor:'pointer',
            transition:'all .5s linear',
            zIndex:'10'
        },
        title : {
            fontSize : '1.2rem',
            fontWeight:'500'
        },
        animated : {
            transform: animateDisplay ? 'scaleY(2)' : animateHide ? 'scaleY(-2)' : null,
            transformOrigin: 'top',
         },
        textAnimated: {
            fontSize:animateDisplay ?'2rem' : '1.2rem',
            transform: animateDisplay ? 'scaleY(.5)' : animateHide ? 'scaleY(1)' : null,
        }
    }
    return (
        <div style={{...styles.container,...styles.animated}} onClick={clicked}>
            <h4 style={{...styles.title,...styles.textAnimated}}>{title}</h4>
        </div>
    )
}

export default TopBar
