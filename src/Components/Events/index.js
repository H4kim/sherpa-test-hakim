import React, { useEffect, useState } from 'react'
import Event from './Event'
import Axios from 'axios'
const Events = (props) => {
    const styles = {
        container: {
            display : 'flex',
            flexWrap:'wrap',
            width:'70%',
            height:'100%',
            alignItems:'center',
            justifyContent:'space-around',
            transition:'opacity 1s ease',
            // transform:'translateY(-200%)',
            position:'absolute',
            top:'0rem',
            left:'0rem',
            right:'0',
            bottom:'0',
            margin:'auto',
        },
    }

    // const [events, setEvents] = useState([])
    // const [selectedEvent, setSelectedEvent] = useState()


    // const eventClickHandler = (id) => {
    //     setSelectedEvent(id)
    // }

    const renderEvents = () => {
        return props.eventsList.map(cur => {
            return <Event key={cur.id} page={props.page}  data={cur}   />
        })
    }

    return (
        <div  style={{...styles.container}}>
           {renderEvents()}
        </div>
    )
}

export default Events
