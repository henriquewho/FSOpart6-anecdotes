import React, {useEffect} from 'react'
import './App.css'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect( ()=>{
    dispatch(initializeAnecdotes())
  })

  /* const state = useSelector(state => state); 
  const show = () => {
    console.log('State: ', state);
  } */

  return (
    <div>
      <h2>Anecdotes {/*<button onClick={show}>State</button>*/}</h2>

      <Filter/>

      <AnecdoteList/>

      <AnecdoteForm/>

      <Notification />

    </div>
  )
}

export default App