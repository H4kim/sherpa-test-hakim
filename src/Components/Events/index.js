import React,{useContext,useEffect} from 'react'
import { getEventList } from '../../Api/APIs'
import {GlobalContext} from '../../Context/GlobalContext'

import Event from './Event'
const Events = (props) => {
    const GlobalCont = useContext(GlobalContext)
    const {page,eventsList , animate} = GlobalCont.values
    console.log(page, eventsList)
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

    useEffect(() => {
        // GlobalCont.updateValues({eventsList :  getData() })
        async function getData() {
            const data = await getEventList()
            GlobalCont.updateValues({eventsList :  data })
        } 
        getData()
    }, [])


    const eventSelectHandler = (id) => {
        // update selected event in contextAPI
    }
    const renderEvents = () => {
        if(eventsList.length > 0) {
            console.log('x')
            return eventsList.map(cur => {
                return <Event key={cur.id} page={page}  data={cur} animated={animate} clicked={() => eventSelectHandler(cur.id)}   />
            })
        }
    }

    return (
        <div  style={{...styles.container}}>
           {renderEvents()}
        </div>
    )
}

export default Events
