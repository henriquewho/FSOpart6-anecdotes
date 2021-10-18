import React from 'react'
import './App.css'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

import { useSelector } from 'react-redux'

const App = () => {
  const state = useSelector(state=>state)
  const showState = () => console.log('state: ', state);

  return (
    <div>
      <h2>Anecdotes <button onClick={showState}>State</button></h2>

      <Notification />

      <Filter/>

      <AnecdoteList/>

      <AnecdoteForm/>

    </div>
  )
}

export default App