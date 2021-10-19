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
                &nbsp; <button onClick={()=>handleVote(anecdote.id, anecdote.votes)}>{anecdote.votes>1 ? 'votes' : 'vote'}</button>
            </div>
        </li>
    )
}

const AnecdoteList = () => {
    const anecdotes = useSelector ( ({filter, anecdotes}) =>
        anecdotes.filter(each => each.content.toLowerCase()
        .includes(filter.toLowerCase()))
    ); 

    const dispatch = useDispatch(); 

    const handleVote = async (id, votes) => {
        dispatch(createVote(id, votes))

        dispatch(createMessage('You voted on a message'))
        setTimeout(()=>dispatch(removeMessage()), 4000);
    }

    return (
        <div>
            {anecdotes
                .sort( (a,b)=>{
                    if (a.votes > b.votes) return -1; 
                    if (a.votes < b.votes) return 1; 
                    return 0; 
                }).map(each =>
                <Anecdote key={each.id} anecdote={each} handleVote={handleVote}/>
            )}
        </div>
    )

}

export default AnecdoteList