const initialMessage = ''; 

export const createMessage = msg => {
    return ({
        type: 'SET_MESSAGE', data: {msg}
    })
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