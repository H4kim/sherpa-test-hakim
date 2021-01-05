import classes from './Home.module.css'
import React, { useState , useEffect } from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import Events from '../../Components/Events/index'
import Menu from '../../Components/Menu/Menu'
import PrimaryTitle from '../../Components/Titles/PrimaryTitle'
import Meetings from '../../Components/Meetings/'
import AnimatedButton from '../../Components/Buttons/AnimatedButton'
import Hero from '../../Components/Hero/Hero'
import { getEventList } from '../../Api/APIs'

const Home = () => {
    const [eventsList, setEventsList] = useState([])
    const [animate,setAnimate] = useState('') 
    const [selectedEvent,setSelectedEvent] = useState('') 
    const [page,setPage] = useState('main') //main or events

    useEffect(() => {   
        getData()
    },[])

    const getData = async () => {
        setEventsList(await getEventList()) 
    }
    
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
                    <Events eventsList={eventsList} page={page}/>
                </div>
            </div>
        </div>
    )
}

export default Home
