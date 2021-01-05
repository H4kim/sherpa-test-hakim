import classes from './Home.module.css'
import React, { useState } from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import Events from '../../Components/Events/index'
import Menu from '../../Components/Menu/Menu'
import PrimaryTitle from '../../Components/Titles/PrimaryTitle'
import Meetings from '../../Components/Meetings/'
import AnimatedButton from '../../Components/Buttons/AnimatedButton'
import Hero from '../../Components/Hero/Hero'

const Home = () => {
    const [animate,setAnimate] = useState('') 
    const [selectedEvent,setSelectedEvent] = useState('') 
    const [page,setPage] = useState('main') //main or events
    
    const TopBarClickHandler = () => {
        setAnimate('first')
        setSelectedEvent('') //set it to the selected event by default the first one from the api
        setPage(('events'))
    }

    return (
        <div className={classes.container}>
            <TopBar title={'MarketPlace'} animated={animate} clicked={() => TopBarClickHandler() } />
            <Hero animated={animate}/>
            <div className={classes.pageContentContainer}>
                <div className={classes.menuContainer}>
                    <Menu />
                </div>
                <div className={classes.contentContainer}>
                    <AnimatedButton  animated={animate}/>
                    <PrimaryTitle title='Featured Meetings'/>
                    <Meetings animated={animate} />
                    <Events page={page}/>
                </div>
            </div>
        </div>
    )
}

export default Home
