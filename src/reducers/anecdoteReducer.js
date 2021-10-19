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

export const createAnecdote = data => {
  return ({
    type: 'NEW_ANECDOTE', data
  })
}

export const createVote = (id) => {
  return (
    {
      type: 'VOTE', data: {id}
    }
  )
}

export const initializeAnecdotes = anecdotes =>{
  return ({
    type: 'INIT', data: anecdotes
  })
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  //console.log('state now: ', state)
  //console.log('action', action)

  switch(action.type){
    case 'VOTE': {
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