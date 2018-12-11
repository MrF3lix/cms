import React from 'react'
import { connect } from 'react-redux'
import { updateAuthorization } from '../actions/global-actions'
import {
    Route,
    Redirect
} from 'react-router-dom'


class PrivateRoute extends React.Component {
    componentDidMount() {
        this.props.updateAuthorization(window.sessionStorage.getItem("authorization") !== null)
    }

    render() {
        const { component: Component, isAuthenticated, ...rest } = this.props
        return (
            <Route {...rest} render={(props) => (
                isAuthenticated === true
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            )} />
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.global.isAuthenticated
})
const mapDispatchToProps = dispatch => ({
    updateAuthorization: value => dispatch(updateAuthorization(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)