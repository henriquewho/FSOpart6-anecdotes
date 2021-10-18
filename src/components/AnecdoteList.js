import { useSelector, useDispatch } from "react-redux";

import { createVote } from "../reducers/anecdoteReducer";
import { createMessage, removeMessage } from "../reducers/notificationReducer";


const Anecdote = ({anecdote, handleVote}) => {
    return (
        <li key={anecdote.id} className='anecdote'>
            <span className='anecdote-content'>
                {anecdote.content}
            </span>
            <div>
                has {anecdote.votes}
                &nbsp; <button onClick={()=>handleVote(anecdote.id)}>{anecdote.votes>1 ? 'votes' : 'vote'}</button>
            </div>
        </li>
    )
}

const AnecdoteList = () => {
    const fullState = useSelector(state => state)
    const anecdotes = useSelector (state => state.anecdotes); 
    const dispatch = useDispatch(); 

    const handleVote = (id) => {
        dispatch(createVote(id))

        dispatch(createMessage('You voted on a message'))
        setTimeout(()=>dispatch(removeMessage()), 4000);
    }

    return (
        <div>
            {anecdotes.sort( (a,b)=>{
                if (a.votes > b.votes) return -1; 
                if (a.votes < b.votes) return 1; 
                return 0; 
            }).map(each =>
                <Anecdote key={each.id} anecdote={each} handleVote={handleVote}/>
            )}
            <button onClick={()=>console.log('full state: ',fullState)}>State</button>
        </div>
    )

}

export default AnecdoteList