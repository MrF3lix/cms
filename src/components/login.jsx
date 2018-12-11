import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateIsPageLoaded, submitLogin } from '../actions/global-actions'

class Login extends React.Component {
    componentDidMount() {
        this.props.updateIsPageLoaded()
    }

    render() {
        const { isAuthenticated } = this.props.global
        return (
            <main>
                <div className="login__container">
                    <div className="inner inner--small">
                        <form onSubmit={(e) => this.props.submitLogin(e)}>
                            <div className="title">Login</div>
                            <div className="input__container">
                                <div className="input__label input__label--touched">Username</div>
                                <input type="text" name="username" id="username" />
                            </div>
                            <div className="input__container">
                                <div className="input__label input__label--touched">Password</div>
                                <input type="password" name="password" id="password" />
                            </div>
                            <div className="input__container">
                                <button type="submit" >Submit</button>
                            </div>
                        </form >
                    </div>
                </div>
                {isAuthenticated === true &&
                    <Redirect to={'/overview'} />
                }
            </main>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})

const mapDispatchToProps = dispatch => ({
    updateIsPageLoaded: () => dispatch(updateIsPageLoaded(true)),
    submitLogin: (e) => dispatch(submitLogin(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
