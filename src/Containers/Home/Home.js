import classes from './Home.module.css'
import React from 'react'
import TopBar from '../../Components/TopBar/TopBar'

const Home = () => {
    return (
        <div className={classes.container}>
            <TopBar title={'MarketPlace'} />
            <div className={classes.pageContentContainer}>
                <div className={classes.menuContainer}>
                    Menu list
                </div>
                <div className={classes.contentContainer}>
                    Content
                </div>
            </div>
        </div>
    )
}

export default Home
