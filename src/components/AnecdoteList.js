import { useSelector, useDispatch } from "react-redux";

import { createVote } from "../reducers/anecdoteReducer";
import { createMessage } from "../reducers/notificationReducer";

const Anecdote = ({anecdote, handleVote}) => {
    return (
        <li key={anecdote.id} className='anecdote'>
            <span className='anecdote-content'>
                {anecdote.content}
            </span>
            <div>
                has {anecdote.votes}
                &nbsp; <button onClick={()=>handleVote(anecdote)}>{anecdote.votes>1 ? 'votes' : 'vote'}</button>
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

    const handleVote = async ({id, votes, content}) => {
        dispatch(createVote(id, votes))
        dispatch(createMessage(`You vote on an anecdote: ${content}`, 2));
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