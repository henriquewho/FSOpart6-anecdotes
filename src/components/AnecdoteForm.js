import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'

function AnecdoteForm() {

    const dispatch = useDispatch()

    const addAnecdote = e =>{
        e.preventDefault(); 
        const content = e.target.anecdote.value; 
        e.target.anecdote.value = ''; 
        dispatch(createAnecdote(content))
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
