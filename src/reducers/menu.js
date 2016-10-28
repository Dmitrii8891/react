import {
    GET_ITEM_REQUEST,
    GET_ITEM_SUCCESS
} from '../constants/Menu'

const initialState = {
    item: 'HELLO',
    arr: [1,2,3,4,5,6,7,8,9]
};

export default function menu(state = initialState, action) {
    switch (action.type) {
        case GET_ITEM_REQUEST:
            return { ...state, item: action.payload, fetching: true };

        case GET_ITEM_SUCCESS:
            return { ...state, arr: action.payload, fetching: false };

        default:
            return state;
    }

}