import classes from './Home.module.css'
import React, { useState } from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import Event from '../../Components/Event/Event'
import Menu from '../../Components/Menu/Menu'
import PrimaryTitle from '../../Components/Titles/PrimaryTitle'
import Meetings from '../../Components/Meetings/'
import AnimatedButton from '../../Components/Buttons/AnimatedButton'

const Home = () => {
    // const [page,setPage] = useState('main')
    const [animate,setAnimate] = useState('') 
    
    const TopBarClickHandler = () => {
        // setPage('event') 
        setAnimate('first')
    }

    return (
        <div className={classes.container}>
            <TopBar title={'MarketPlace'} clicked={() => TopBarClickHandler() } />
            <div className={classes.pageContentContainer}>
                <div className={classes.menuContainer}>
                    <Event />
                    <Menu />
                </div>
                <div className={classes.contentContainer}>
                    <AnimatedButton  animate={animate}/>
                    <PrimaryTitle title='Featured Meetings'/>
                    <Meetings />
                </div>
            </div>
        </div>
    )
}

export default Home
