import React,{useContext,useEffect} from 'react'
import { getEventList } from '../../Api/APIs'
import {GlobalContext} from '../../Context/GlobalContext'

import Event from './Event'
const Events = (props) => {
    const GlobalCont = useContext(GlobalContext)
    const {page,eventsList , animate} = GlobalCont.values
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
        async function getData() {
            const data = await getEventList()
            GlobalCont.updateValues({eventsList :  data })
        } 
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const eventSelectHandler = (id) => {
        GlobalCont.updateValues({selectedEvent :  id, page:'home', animate:'seconde'})
    }
    const renderEvents = () => {
        if(eventsList.length > 0) {
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
