import React, { useEffect, useState } from 'react'
import Event from './Event'
import Axios from 'axios'
const Events = (props) => {
    const styles = {
        container: {
            display : 'flex',
            flexWrap:'wrap',
            width:'100%',
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

    const [events, setEvents] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(1)

    useEffect(() => {
        Axios.get('https://tt-sherpa-backend.herokuapp.com/events').then(data => {
            setEvents(data.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    const eventClickHandler = (id) => {
        setSelectedEvent(id)
        console.log(id)
    }

    const renderEvents = () => {
        return events.map(cur => {
            return <Event key={cur.id} page={props.page} selectedEvent={selectedEvent} data={cur} clicked={() => eventClickHandler(cur.id)}  />
        })
    }

    return (
        <div  style={{...styles.container}}>
           {renderEvents()}
        </div>
    )
}

export default Events
