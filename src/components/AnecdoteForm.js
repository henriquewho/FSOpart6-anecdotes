import React from 'react'
import {useDispatch} from 'react-redux'

import {createAnecdote} from '../reducers/anecdoteReducer'
import {createMessage, removeMessage} from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

function AnecdoteForm() {

    const dispatch = useDispatch()

    const addAnecdote = async e =>{
        e.preventDefault(); 
        const content = e.target.anecdote.value; 
        e.target.anecdote.value = ''; 

        const newAnecdote = await anecdoteService.create(content); 
        dispatch(createAnecdote(newAnecdote))

        dispatch(createMessage('You created a note'));
        setTimeout(()=>dispatch(removeMessage()), 4000);
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
