import rootReducer from './root-reducer.jsx'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(thunk)

export default createStore(rootReducer, composeEnhancers(middleware))