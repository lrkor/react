import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'


export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItem = () => ({
    type: ADD_ITEM
})

export const delItems = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction  = (list)=>({
    type:GET_LIST,
    list
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/static/demo.json').then((res) => {
            const list = res.data.data.list
            const action = getListAction(list)
            dispatch(action)
        })
    }
}