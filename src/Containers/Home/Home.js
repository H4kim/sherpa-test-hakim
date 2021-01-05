import classes from './Home.module.css'
import React, { useState } from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import Event from '../../Components/Event/Event'
import Menu from '../../Components/Menu/Menu'
import PrimaryTitle from '../../Components/Titles/PrimaryTitle'
import Meetings from '../../Components/Meetings/'
import AnimatedButton from '../../Components/Buttons/AnimatedButton'
import Hero from '../../Components/Hero/Hero'

const Home = () => {
    const [animate,setAnimate] = useState('') 
    
    const TopBarClickHandler = () => {
        setAnimate('first')
    }

    return (
        <div className={classes.container}>
            <TopBar title={'MarketPlace'} animated={animate} clicked={() => TopBarClickHandler() } />
            <Hero animated={animate}/>
            <div className={classes.pageContentContainer}>
                <div className={classes.menuContainer}>
                    <Event />
                    <Menu />
                </div>
                <div className={classes.contentContainer}>
                    <AnimatedButton  animated={animate}/>
                    <PrimaryTitle title='Featured Meetings'/>
                    <Meetings animated={animate} />
                </div>
            </div>
        </div>
    )
}

export default Home
