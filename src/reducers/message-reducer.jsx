const initialState = {
    items: []
}

const messages = (state = initialState, action) => {
    switch (action.type) {
        case 'CLOSE_MESSAGE':
            return {
                ...state,
                items: state.items.map(message => {
                    if (message.id != action.id) {
                        return message
                    } else {
                        message.hidden = true
                        return message
                    }
                })
            }
        case 'ADD_MESSAGE': {
            return {
                ...state,
                items: [...state.items, action.message]
            }
        }
        default:
            return state
    }
}

export default messages