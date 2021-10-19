import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {createAnecdote} from '../reducers/anecdoteReducer'
import {createMessage, removeMessage} from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

function AnecdoteForm() {

    const dispatch = useDispatch()
    const message = useSelector(state => state.message)

    const addAnecdote = async e =>{
        e.preventDefault(); 
        const content = e.target.anecdote.value; 
        e.target.anecdote.value = ''; 

        dispatch(createAnecdote(content))

        dispatch(createMessage(`You created a note: ${content}`, 2));
    }

    return (
        <div>
            <h3>create new</h3>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote'/></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm
