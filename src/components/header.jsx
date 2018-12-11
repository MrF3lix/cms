import React from 'react'
import { connect } from 'react-redux'
import { updateAuthorization } from '../actions/global-actions'

const logout = updateAuthorization => {
    window.sessionStorage.removeItem("authorization")
    updateAuthorization(false)
}

const Header = ({ global, updateAuthorization }) => (
    <header>
        {global.isAuthenticated &&
            <button onClick={() => logout(updateAuthorization)}>Logout</button>
        }
    </header>
)

const mapStateToProps = state => ({
    global: state.global
})
const mapDispatchToProps = dispatch => ({
    updateAuthorization: value => dispatch(updateAuthorization(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)