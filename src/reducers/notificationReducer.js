const initialMessage = ''; 

export const createMessage = (msg, timer) => {
    return async dispatch => {
        await dispatch({type: 'SET_MESSAGE', data: {msg}})
        setTimeout(async ()=>await dispatch(removeMessage()), timer*1000)
    }
}

export const removeMessage = () => {
    return ({
        type: 'REMOVE_MESSAGE'
    })
}

const notificationReducer = (state = initialMessage, action) => {
    switch (action.type){
        case 'SET_MESSAGE': return action.data.msg; 
        case 'REMOVE_MESSAGE': return ''; 
        default: return state;
    }
}

export default notificationReducer