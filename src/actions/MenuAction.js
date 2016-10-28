import {
    GET_ITEM_REQUEST,
    GET_ITEM_SUCCESS
} from '../constants/Menu'

export function getItem(item) {
    return (dispatch) => {
        dispatch({
            type: GET_ITEM_REQUEST,
            payload: item
        });

        dispatch({
            type: GET_ITEM_SUCCESS,
            payload: item
        })
    }
}
export function getTest() {
    return (dispatch) => {
        dispatch({
            type: GET_ITEM_REQUEST,
            payload: 'Hi'
        });

        dispatch({
            type: GET_ITEM_SUCCESS,
            payload: [1,2,3,85,6]
        })
    }
}