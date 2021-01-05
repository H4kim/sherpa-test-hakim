import React from 'react'
import Meeting from './Meeting'

const Meetings = () => {
    const styles = {
        container: {
            display : 'flex',
            flexWrap:'wrap',
            width:'75%',
            justifyContent:'space-around',
        },
    }
    return (
        <div style={styles.container}>
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
            <Meeting />
        </div>
    )
}

export default Meetings
