import classes from './Menu.module.css';
import React from 'react'
import { Button } from 'react-bootstrap';

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
           borderRadius:'20px'
           
        }
    }
    return (
        <div style={styles.container}>
            <ul style={styles.itemsContainer}>
                <li ><Button className={'mb-2 btn btn-light'} style={styles.singleItem}>Test</Button></li>
                <li ><Button className={'mb-2 btn btn-light'} style={styles.singleItem}>Test</Button></li>
                <li ><Button className={'mb-2 btn btn-light'} style={styles.singleItem}>Test</Button></li>
                <li ><Button className={'mb-2 btn btn-light'} style={styles.singleItem}>Test</Button></li>
            </ul>
        </div>
    )
}

export default Menu
