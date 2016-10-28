import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import menu from './menu'

export default combineReducers({
    page,
    user,
    menu
});