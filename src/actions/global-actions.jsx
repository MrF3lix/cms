import { generateMessage } from './message-actions'
import * as Requests from '../helpers/fetch-helper'

export const updateAuthorization = value => ({
    type: 'UPDATE_IS_AUTHENTICATED',
    value
})

export const updateIsPageLoaded = value => ({
    type: 'UPDATE_IS_PAGE_LOADED',
    value
})

export const submitLogin = e => async (dispatch, getState) => {
    e.preventDefault()

    const state = getState()
    const url = `${state.global.baseUrl}/users/authenticate`

    const values = new FormData(e.target)
    let requestData = new URLSearchParams(values)

    const response = await Requests.postRequest(url, requestData)
    const payload = await response.json()

    if (response.ok) {
        window.sessionStorage.setItem("authorization", payload.token)
        dispatch(updateAuthorization(true))
        dispatch(updateCurrentUser(payload))
    } else {
        dispatch(generateMessage('error', payload.message))
    }
}

export const submitRegister = e => async (dispatch, getState) => {
    e.preventDefault()

    const state = getState()
    const url = `${state.global.baseUrl}/users/register`

    const values = new FormData(e.target)
    let requestData = new URLSearchParams(values)

    const response = await Requests.postRequest(url, requestData)
    const payload = await response.json()

    if (response.ok) {
        dispatch(updateAuthorization(true))
    } else {
        dispatch(generateMessage('error', payload.message))
    }
}

export const getCurrentUser = () => async (dispatch, getState) => {
    const state = getState()
    const url = `${state.global.baseUrl}/users/current`

    const response = await Requests.getRequest(url)
    const payload = await response.json()
    dispatch(updateCurrentUser(payload))
}

const updateCurrentUser = value => ({
    type: 'UPDATE_CURRENT_USER',
    value
})