import { generateMessage } from './message-actions'

export const updateAuthorization = value => ({
    type: 'UPDATE_AUTHORIZATION',
    value
})

export const updateIsPageLoaded = value => ({
    type: 'UPDATE_IS_PAGE_LOADED',
    value
})

export const submitLogin = e => (dispatch, getState) => {
    e.preventDefault()

    const state = getState()
    const url = `${state.global.baseUrl}/users/authenticate`

    const values = new FormData(e.target)
    let requestData = new URLSearchParams(values)

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: requestData
    }).then(response => {
        if (response.ok) {
            response.json().then(payload => window.sessionStorage.setItem("authorization", payload.token))
            dispatch(updateAuthorization(true))
        } else {
            response.json().then(payload => dispatch(generateMessage('error', payload.message)))
        }
    })
}

export const submitRegister = e => (dispatch, getState) => {
    e.preventDefault()

    const state = getState()
    const url = `${state.global.baseUrl}/users/register`

    const values = new FormData(e.target)
    let requestData = new URLSearchParams(values)

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: requestData
    }).then(response => {
        if (response.ok) {
            response.json().then(payload => window.sessionStorage.setItem("authorization", payload.token))
            dispatch(updateAuthorization(true))
        } else {
            response.json().then(payload => dispatch(generateMessage('error', payload.message)))
        }
    })
}