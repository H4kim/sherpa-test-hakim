import React from 'react'

const Meeting = ({content}) => {
    const styles = {
        container : {
            width: '21%',
            height:'17rem',
            borderRadius:'10px',
            backgroundColor:'#EAEAE8',
            marginBottom:'2rem',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        }
    }
    return (
        <div style={styles.container}>
            <p>Event : {content.event_id}</p>
            <p>{content.description}</p>
        </div>
    )
}

export default Meeting
