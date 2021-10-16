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

export const createAnecdote = (content) => {
  return ({
    type: 'NEW_ANECDOTE', data: {content}
  })
}

export const createVote = (id) => {
  return (
    {
      type: 'VOTE', data: {id}
    }
  )
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  
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
      const newAnecdote = asObject(action.data.content); 
      return state.concat(newAnecdote); 
    }

    default: return state; 
  }
}

export default reducer