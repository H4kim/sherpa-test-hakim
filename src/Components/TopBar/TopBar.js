import React,{useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalContext'
import { ANIMATION_STEPS, PAGE_CONTEXT } from '../../Utils/Constants'

const TopBar = ({title,clicked }) => {
    const GlobalCont = useContext(GlobalContext)
    const animated = GlobalCont.values.animate

    const animateDisplay = animated === ANIMATION_STEPS.step1
    const animateHide = animated === ANIMATION_STEPS.step2
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
            transform: animateDisplay ? 'scaleY(2)' : animateHide ? 'scaleY(1)' : null,
            transformOrigin: 'top',
         },
        textAnimated: {
            fontSize:animateDisplay ?'2rem' : '1.2rem',
            transform: animateDisplay ? 'scaleY(.5)' : animateHide ? 'scaleY(1)' : null,
        }
    }

    const TopBarClickHandler = () => {
        GlobalCont.updateValues({animate :  ANIMATION_STEPS.step1 , page : PAGE_CONTEXT.events })
    }
    return (
        <div style={{...styles.container,...styles.animated}} onClick={() => TopBarClickHandler()}>
            <h4 style={{...styles.title,...styles.textAnimated}}>{title}</h4>
        </div>
    )
}

export default TopBar
