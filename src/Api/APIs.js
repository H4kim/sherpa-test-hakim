import {Axios} from '../helpers/axios';
import {GET_EVENTS_LIST , GET_MENU_LIST} from '../Utils/Constants'

export const getEventList = async () => {
    try {
        const data = await Axios.get(`${GET_EVENTS_LIST}`)
        return  data.data
    }catch(error) {
        console.log(error)
    }
} 

export const getEvent = async (id) => {
    try {
        const data = await Axios.get(`${GET_EVENTS_LIST}/${id}`)
        return data.data
    }catch(error) {
        console.log(error)
    }
} 

export const getEventMeetings = async (eventId) => {
    try {
        const data = await Axios.get(`${GET_EVENTS_LIST}/${eventId}/meetings`)
        return data.data
    }catch(error) {
        console.log(error)
    }
} 


export const getMenuList = async (context) => {
    try {
        const data = await Axios.get(`${GET_MENU_LIST}/${context}`)
        return data.data
    } catch(error){
        console.log(error)
    }
}


