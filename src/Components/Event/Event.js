import React from 'react'
import { Button } from 'react-bootstrap';

const Event = ({logo ,event, details}) => {
    const styles = {
        container : {
            width : '70%',
            height : '15rem',
            marginBottom:'1rem',
            backgroundColor :'#FDFDFB',
            borderRadius:'15%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        },
        logo : {
            width:'7rem',
            marginBottom:'1rem'
        },
        eventTitle: {
            marginBottom: '1rem',
            borderRadius:'20px'
        }
    }
    return (
        <div style={styles.container}>
            <img src='https://tt-sherpa-backend.herokuapp.com/images/event1.png' alt='test' style={styles.logo} />
            <Button variant="primary" style={styles.eventTitle}>Event Name</Button>
            <p>Details here</p>
        </div>
    )
}

export default Event
