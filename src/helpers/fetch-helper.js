export const postRequest = (url, body) => {
    return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: body
        }
    )
}

export const getRequest = (url) => {
    let token = window.sessionStorage.getItem('authorization')
    return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Authorization': `Bearer ${token}`
            }
        }
    )
}