import React, { lazy } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { updateAuthorization } from './actions/global-actions'

import Loading from './components/_shared/loading'
import Messages from './components/_shared/messages'

const Login = lazy(() => import('./components/login'))
const Register = lazy(() => import('./components/register'))

class MainRouter extends React.Component {
    componentDidMount() {
        this.props.updateAuthorization(window.sessionStorage.getItem("authorization") !== null)
    }

    render() {
        const { location, global } = this.props
        return (
            <div className="root__container">
                <Messages />
                <Loading isLoaded={global.isPageLoaded}>
                    <Switch location={location}>
                        <Route path={'/login'} component={Login} exact={true} />
                        <Route path={'/register'} component={Register} exact={true} />
                    </Switch>
                </Loading>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})

const mapDispatchToProps = dispatch => ({
    updateAuthorization: value => dispatch(updateAuthorization(value))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainRouter))