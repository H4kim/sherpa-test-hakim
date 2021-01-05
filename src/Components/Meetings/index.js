import React from 'react'
import Meeting from './Meeting'

const Meetings = ({animated}) => {
    const animateDisplay = animated === 'first' 
    const animateHide = animated === 'second' 
    const styles = {
        container: {
            display : 'flex',
            flexWrap:'wrap',
            width:'75%',
            justifyContent:'space-around',
            transition:'opacity 1s ease'

        },
        animated : {
            opacity:animateDisplay ? '0' : animateHide ? '1' : null,
         }
    }
    return (
        <div  style={{...styles.container,...styles.animated}}>
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
        </div>
    )
}

export default Meetings
