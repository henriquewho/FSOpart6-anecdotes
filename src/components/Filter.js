import React from 'react'
import { useDispatch } from 'react-redux';
import {setFilter} from '../reducers/filterReducer'

function Filter() {

    const dispatch = useDispatch()

    const handleChange = e => {
        const filter = e.target.value; 
        dispatch(setFilter(filter)); 
    }

    return (
        <div className='filter'>
            Filter: <input type='text' onChange={handleChange}></input>
        </div>
    )
}

export default Filter
