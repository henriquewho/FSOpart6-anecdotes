import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({type:'NEW_ANECDOTE', data: newAnecdote})
  }
}

export const createVote = (id, votes) => {
  return async dispatch => {
    const modifiedAnecdote = await anecdoteService.vote(id, votes); 
    dispatch({type: 'VOTE', data: {id: modifiedAnecdote.id}})
  }
}

export const initializeAnecdotes = () =>{
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll(); 
    dispatch({type:'INIT', data: anecdotes})
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  //console.log('state now: ', state)
  //console.log('action', action)

  switch(action.type){
    case 'VOTE': {
      console.log('entered vote action on reducer');
      const id = action.data.id; 
      const noteToChange = state.find(each => each.id === id); 
      noteToChange.votes++; 

      return state.map(each=>{
        if (each.id !== id) return each; 
        else return noteToChange; 
      })
    }

    case 'NEW_ANECDOTE': {
      const newAnecdote = action.data; 
      return state.concat(newAnecdote); 
    }

    case 'INIT': {
      return action.data
    }

    default: return state; 
  }
}

export default reducer