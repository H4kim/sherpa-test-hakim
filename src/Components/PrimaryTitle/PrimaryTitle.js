import React from 'react'

const PrimaryTitle = ({title}) => {
    const styles = {
        title : {
            fontSize:'1.5rem',
            fontWeight:'500',
            color:'black'
        }
    }
    return (
        <p style={styles.title}>{title}</p>
    )
}

export default PrimaryTitle
