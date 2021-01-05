import classes from './Home.module.css'
import React from 'react'
import TopBar from '../../Components/TopBar/TopBar'
import Event from '../../Components/Event/Event'

const Home = () => {
    return (
        <div className={classes.container}>
            <TopBar title={'MarketPlace'} />
            <div className={classes.pageContentContainer}>
                <div className={classes.menuContainer}>
                    <Event />
                </div>
                <div className={classes.contentContainer}>
                    Content
                </div>
            </div>
        </div>
    )
}

export default Home
