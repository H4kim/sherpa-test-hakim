// import classes from './TopBar.module.css';
import React,{useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalContext'
import { Button } from 'react-bootstrap';
import {  ANIMATION_STEPS } from '../../Utils/Constants';

const AnimatedButton = () => {
    const GlobalCont = useContext(GlobalContext)
    const animated = GlobalCont.values.animate
    const AnimateLeft = animated === ANIMATION_STEPS.step1
    const AnimateRight = animated === ANIMATION_STEPS.step2

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
           transform: AnimateLeft ? 'translateX(-600px)' : AnimateRight ? 'translateX(0)' : null,

        }
    }

    
    return (
        <Button className={"btn btn-light round"} style={{...styles.container,...styles.animated}}>Details</Button>
    )
}

export default AnimatedButton
