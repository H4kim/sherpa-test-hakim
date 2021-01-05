import React from 'react'
import { Button } from 'react-bootstrap';

const AnimatedButton = ({animated}) => {
    const AnimateLeft = animated === 'first'
    const AnimateRight = animated === 'second'

    const styles = {
        container : {
            color: 'black',
            backgroundColor: 'white' ,
            borderRadius:'15px',
            transition: 'all .5s ease',
            padding:'.5rem 5rem',
            marginBottom:'3rem',
            zIndex:'10'
        },
        animated : {
           transform: AnimateLeft ? 'translateX(-600px)' : AnimateRight ? 'translateX(600px)' : null,

        }
    }

    
    return (
        <Button className={"btn btn-light round"} style={{...styles.container,...styles.animated}}>Details</Button>
    )
}

export default AnimatedButton
