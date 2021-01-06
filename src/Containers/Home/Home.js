import classes from './Home.module.css'
import React from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import Events from '../../Components/Events/index'
import Menu from '../../Components/Menu/Menu'
import PrimaryTitle from '../../Components/Titles/PrimaryTitle'
import Meetings from '../../Components/Meetings/'
import AnimatedButton from '../../Components/Buttons/AnimatedButton'
import Hero from '../../Components/Hero/Hero'

const Home = () => {
    return (
        <div className={classes.container}>
            <TopBar title={'MarketPlace'}  />
             <Hero />
            <div className={classes.pageContentContainer}>
                <div className={classes.menuContainer}>
                    <Menu />
                </div>
                <div className={classes.contentContainer}>
                    <AnimatedButton />
                    <PrimaryTitle title='Featured Meetings'/>
                    <Meetings  />
                    <Events />
                </div>
            </div>
        </div>
    )
}

export default Home
