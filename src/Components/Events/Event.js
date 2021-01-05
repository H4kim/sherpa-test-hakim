import React from 'react'
import { Button } from 'react-bootstrap';
// import { keyframes,css } from "styled-components";
// import { motion } from "framer-motion"

const Event = ({data,animated,clicked,selectedEvent,page}) => {
    const isSelected = selectedEvent === data.id
    const styles = {
        container : {
            width : '20%',
            height : '15rem',
            backgroundColor :'#FDFDFB',
            borderRadius:'15%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            zIndex:'10',
            transition:'all 1s linear'
        },
        logo : {
            width:'7rem',
            marginBottom:'1rem'
        },
        eventTitle: {
            marginBottom: '1rem',
            borderRadius:'20px'
        },
        animated :{
            // transform: isSelected ? 'translate(-350px,-300px)' : page ==='events' ? 'translate(0,0)' : null,
            opacity: isSelected && page === 'main' ? '1' :  page ==='events' ? '1' :'0',
        }
    }
    return (
        <div style={{...styles.container,...styles.animated}}  >
            <img src={`https://tt-sherpa-backend.herokuapp.com${data.logo}`} alt='test' style={styles.logo} />
            <Button variant="primary" style={styles.eventTitle}>{data.title}</Button>
            <p>{data.detail}</p>
        </div>
    )
}

export default Event
