import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton';

const Menu = ({menuItems}) => {
    const styles = {
        container : {
            width : '70%',
            backgroundColor :'#EAEAE8',
            borderRadius:'10%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'3rem 0',
        },
        itemsContainer: {
            listStyle:'none',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignitems:'center',
            textAlign:'center',
            flex:'1',
            padding:'0',
            margin:'0',
        },
        singleItem : {
            width:'70%',
            borderRadius:'20px',
            marginBottom:'1rem',
        }
    }
    return (
        <div style={styles.container}>
            <ul style={styles.itemsContainer}>
                <li ><PrimaryButton customStyle={styles.singleItem}/></li>
                <li ><PrimaryButton customStyle={styles.singleItem}/></li>
                <li ><PrimaryButton customStyle={styles.singleItem}/></li>
                <li ><PrimaryButton customStyle={styles.singleItem}/></li>
            </ul>
        </div>
    )
}

export default Menu
