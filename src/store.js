import { createStore, combineReducers, applyMiddleware } from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import filterReducer from "./reducers/filterReducer"
import notificationReducer from "./reducers/notificationReducer"
import reducer from "./reducers/anecdoteReducer"

const combinedReducer = combineReducers({
    anecdotes: reducer, message: notificationReducer, filter: filterReducer
})

const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store