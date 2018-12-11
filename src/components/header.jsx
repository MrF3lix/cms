import React from 'react'
import { connect } from 'react-redux'
import { updateAuthorization } from '../actions/global-actions'
import { NavLink } from 'react-router-dom'

const logout = updateAuthorization => {
    window.sessionStorage.removeItem("authorization")
    updateAuthorization(false)
}

const Header = ({ global, updateAuthorization }) => (
    <header>
        <div className="inner">
            <div className="logo__container">
                Logo
            </div>
            <div className="navigation__container">
                {global.isAuthenticated &&
                    <React.Fragment>
                        <NavLink className="navigation__item" to={'/overview'}>Overview</NavLink>
                        <div className="navigation__item account--actions" onClick={() => logout(updateAuthorization)}>Logout</div>
                    </React.Fragment>
                }
                {!global.isAuthenticated &&
                    <React.Fragment>
                        <NavLink className="navigation__item account--actions" to={'/register'}>Register</NavLink>
                        <NavLink className="navigation__item account--actions account--actions--main" to={'/login'}>Login</NavLink>
                    </React.Fragment>
                }
            </div>
        </div>
    </header >
)

const mapStateToProps = state => ({
    global: state.global
})
const mapDispatchToProps = dispatch => ({
    updateAuthorization: value => dispatch(updateAuthorization(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)