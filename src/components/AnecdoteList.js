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
        //console.log('vote', id)
        let numOfVotes = anecdotes.map(each=>each.votes)
        let position=-1;
        for (let i=0; i<anecdotes.length; i++){
            if (anecdotes[i].id === id) {
                position = i; break; 
            }
        }

        dispatch(createVote(id))

        numOfVotes = anecdotes.map(each=>each.votes)
        const thisAnecdote = anecdotes.find(each=>each.id === id); 
        const votesThis = thisAnecdote.votes; 

        for (let i=position; i>=0; i--){
            if (votesThis > anecdotes[i].votes) {
                console.log('trigger change of', thisAnecdote.id);
                
            }
        }        
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