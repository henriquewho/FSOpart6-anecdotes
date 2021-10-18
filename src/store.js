import { createStore, combineReducers } from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'

import notificationReducer from "./reducers/notificationReducer"
import reducer from "./reducers/anecdoteReducer"

const combinedReducer = combineReducers({
    anecdotes: reducer, message: notificationReducer
})

const store = createStore(combinedReducer, composeWithDevTools())

export default store