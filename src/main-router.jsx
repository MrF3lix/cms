import React, { lazy } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import PrivateRoute from './components/private-route'

import Loading from './components/_shared/loading'
import Messages from './components/_shared/messages'

const Header = lazy(() => import('./components/header'))
const Login = lazy(() => import('./components/login'))
const Register = lazy(() => import('./components/register'))
const Overview = lazy(() => import('./components/page-overview'))

class MainRouter extends React.Component {
    render() {
        const { location, global } = this.props
        return (
            <div className="root__container">
                <Messages />
                <Loading isLoaded={global.isPageLoaded}>
                    <Header />
                    <Switch location={location}>
                        <Route path={'/'} component={Login} exact={true} />
                        <Route path={'/login'} component={Login} exact={true} />
                        <Route path={'/register'} component={Register} exact={true} />
                        <PrivateRoute path={'/overview'} component={Overview} exact={true} />
                    </Switch>
                </Loading>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})

export default withRouter(connect(mapStateToProps, null)(MainRouter))