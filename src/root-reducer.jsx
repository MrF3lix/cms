import { combineReducers } from 'redux'
import global from './reducers/global-reducer.jsx'
import messages from './reducers/message-reducer.jsx'


export default combineReducers({
    global,
    messages
})

