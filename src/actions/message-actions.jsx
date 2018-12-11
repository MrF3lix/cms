export const generateMessage = (type, content) => (dispatch, getState) => {
    let state = getState()

    let message = {
        id: state.global.messages.length,
        type: type,
        content: content,
        hidden: false
    }

    dispatch(addMessage(message))
    dispatch(closeMessageAferTimeout(message.id))
}

export const closeMessage = id => ({
    type: 'CLOSE_MESSAGE',
    id
})

const addMessage = message => ({
    type: 'ADD_MESSAGE',
    message
})

const closeMessageAferTimeout = id => dispatch => {
    setTimeout(() => {
        dispatch(closeMessage(id))
    }, 6000)
}