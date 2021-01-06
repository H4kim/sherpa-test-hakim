import classes from './Home.module.css'
import React, { useContext, useEffect } from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import Events from '../../Components/Events/index'
import Menu from '../../Components/Menu/Menu'
import PrimaryTitle from '../../Components/Titles/PrimaryTitle'
import Meetings from '../../Components/Meetings/'
import AnimatedButton from '../../Components/Buttons/AnimatedButton'
import Hero from '../../Components/Hero/Hero'
import { getEventList, getEventMeetings, getMenuList } from '../../Api/APIs'
import {GlobalContext} from '../../Context/GlobalContext'

const Home = () => {
    // const GlobalCont = useContext(GlobalContext)

    useEffect(() => {   
        getData()
    },[])   
    
    const getData = async () => {
        await getEventList()
        // await getMenuList(page) //TODO
        // setEventMeetings(await getEventMeetings(1))
    }
    
    const TopBarClickHandler = () => {
        // setAnimate('first')
        // setSelectedEvent('') //set it to the selected event by default the first one from the api
        // setPage(('events'))
    }

    return (
        <div className={classes.container}>
            <TopBar title={'MarketPlace'}  clicked={() => TopBarClickHandler() } />
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
