import React from 'react'
import {useDispatch} from 'react-redux'

import {createAnecdote} from '../reducers/anecdoteReducer'
import {createMessage, removeMessage} from '../reducers/notificationReducer'

function AnecdoteForm() {

    const dispatch = useDispatch()

    const addAnecdote = e =>{
        e.preventDefault(); 
        const content = e.target.anecdote.value; 
        e.target.anecdote.value = ''; 
        dispatch(createAnecdote(content))

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
