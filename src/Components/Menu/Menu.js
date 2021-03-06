import React,{useContext,useEffect} from 'react'
import { getMenuList } from '../../Api/APIs';
import {GlobalContext} from '../../Context/GlobalContext'
import PrimaryButton from '../Buttons/PrimaryButton';

const Menu = () => {
    const GlobalCont = useContext(GlobalContext)
    const menuList = GlobalCont.values.menuList
    
    const styles = {
        container : {
            width : '70%',
            backgroundColor :'#EAEAE8',
            borderRadius:'10%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'3rem 0',
            zIndex:'10'
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

    useEffect(() => {
        async function getData() {
            const data = await getMenuList(GlobalCont.values.page)
            GlobalCont.updateValues({menuList :  data })
        } 
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [GlobalCont.values.page])

    const renderListItems = () => {
        return menuList.map((cur,i) => {
            return  <li key={i}><PrimaryButton text={cur} customStyle={styles.singleItem}/></li>

        })
    }
    return (
        <div style={styles.container}>
            <ul style={styles.itemsContainer}>
                {renderListItems()}
            </ul>
        </div>
    )
}

export default Menu
