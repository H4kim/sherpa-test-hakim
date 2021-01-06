import React, { useState } from 'react'
import { createContext } from "react";

export const GlobalContext = createContext({
    eventsList: [],
    menuList : [],
    selectedEvent : '',
    page : 'home',
    animate : '',
    updateValues : () => {}
})


const GlobalContextProvider = (props) => {
    const [eventsList, setEventsList] = useState([])
    const [menuList, setMenuList] = useState([])
    const [meetingsList, setMeetingsList] = useState([])
    const [selectedEvent,setSelectedEvent] = useState('1') 
    const [page,setPage] = useState('home') //home or events 
    const [animate,setAnimate] = useState('') 


    const values = {
        eventsList,
        menuList,
        selectedEvent,
        page,
        animate,
        meetingsList
    }

    const updateValues = (data) => {
        if(data.eventsList) setEventsList(data.eventsList)
        if(data.menuList) setMenuList(data.menuList)
        if(data.selectedEvent) setSelectedEvent(data.selectedEvent)
        if(data.page) setPage(data.page)
        if(data.animate) setAnimate(data.animate)
        if(data.meetingsList) setMeetingsList(data.meetingsList)
    }

    return(
        <GlobalContext.Provider value={{values , updateValues}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider