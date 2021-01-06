import React,{useContext,useEffect} from 'react'
import { getEventMeetings } from '../../Api/APIs'
import {GlobalContext} from '../../Context/GlobalContext'
import { ANIMATION_STEPS } from '../../Utils/Constants'

import Meeting from './Meeting'

const Meetings = () => {
    const GlobalCont = useContext(GlobalContext)
    const {animated, meetingsList,selectedEvent} = GlobalCont.values

    const animateDisplay = animated === ANIMATION_STEPS.step1 
    const animateHide = animated === ANIMATION_STEPS.step2
    const styles = {
        container: {
            display : 'flex',
            flexWrap:'wrap',
            width:'75%',
            justifyContent:'space-around',
            transition:'opacity 1s ease'

        },
        animated : {
            opacity:animateDisplay ? '0' : animateHide ? '1' : null,
         }
    }

    useEffect(() => {
        async function getData() {
            const data = await getEventMeetings(selectedEvent)
            GlobalCont.updateValues({meetingsList :  data })
        } 
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedEvent])

    const renderMeetings = () => {
        if(meetingsList.length > 0) {
            return meetingsList.map(cur => {
                return <Meeting key={cur.start} content={cur}   />
            })
        }
    }
    
    return (
        <div  style={{...styles.container,...styles.animated}}>
            {renderMeetings()}
        </div>
    )
}

export default Meetings
