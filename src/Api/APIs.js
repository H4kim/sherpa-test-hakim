import { Children } from 'react';
import {Axios} from '../helpers/axios';
import {GET_EVENTS_LIST , GET_MENU_LIST} from '../Utils/Constants'

export const getEventList = async () => {
    try {
        const data = await Axios.get(`${GET_EVENTS_LIST}`)
        return data.data
    }catch(error) {
        console.log(error)
    }
} 

export const getEvent = (id) => {
    Axios.get(`${GET_EVENTS_LIST}/id`).then(data => {
        console.log(data)
        // return data.data
    }).catch(e => {

    })
} 