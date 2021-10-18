const initialMessage = 'initial message'; 

const notificationReducer = (state = initialMessage, action) => {
    switch (action.type){
        case 'SET_MESSAGE': return action.message; 
        default: return state;
    }
}

export default notificationReducer