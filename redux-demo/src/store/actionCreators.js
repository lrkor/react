import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM ,GET_LIST} from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItem = () => ({
    type:ADD_ITEM
})

export const delItems = (index) => ({
    type:DELETE_ITEM,
    index
})

export const getListAction  = (list)=>({
    type:GET_LIST,
    list
})