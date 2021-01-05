// import classes from './TopBar.module.css';
import React from 'react'

const TopBar = ({title}) => {
    const styles = {
        container : {
            backgroundColor: '#eaeae8',
            textAlign: 'center',
            height:'2.2rem',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        },
        title : {
            fontSize : '1.2rem',
            fontWeight:'500'
        }
    }
    return (
        <div style={styles.container}>
            <h4 style={styles.title}>{title}</h4>
        </div>
    )
}

export default TopBar
