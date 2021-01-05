import React from 'react'
import { Button } from 'react-bootstrap';

const AnimatedButton = (props) => {
    const AnimateLeft = props.animate === 'first'
    const AnimateRight = props.animate === 'second'

    const styles = {
        container : {
            color: 'black',
            backgroundColor: 'white' ,
            borderRadius:'15px',
            transition:'all 1s ease',
            padding:'.5rem 5rem',
            marginBottom:'3rem'
        },
        animated : {
           transform: AnimateLeft ? 'translateX(-600px)' : AnimateRight ? 'translateX(600px)' : null
        }
    }

    
    return (
        <Button className={"btn btn-light round"} style={{...styles.container,...styles.animated}}>Details</Button>
    )
}

export default AnimatedButton
