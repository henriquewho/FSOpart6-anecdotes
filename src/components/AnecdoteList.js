import { useSelector, useDispatch } from "react-redux";
import { createVote } from "../reducers/anecdoteReducer";


const Anecdote = ({anecdote, handleVote}) => {
    return (
        <li key={anecdote.id} className='anecdote'>
            <span className='anecdote-content'>
                {anecdote.content}
            </span>
            <div>
                has {anecdote.votes}
                &nbsp; <button onClick={()=>handleVote(anecdote.id)}>vote</button>
            </div>
        </li>
    )
}

const AnecdoteList = () => {
    const anecdotes = useSelector (state => state); 
    const dispatch = useDispatch(); 

    const handleVote = (id) => {
        //console.log('vote', id)
        dispatch(createVote(id))
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
        </div>
    )

}

export default AnecdoteList