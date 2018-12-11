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
                <div className="inner inner--small">
                    <section className="login__container">
                        <h2>Login</h2>
                        <form onSubmit={(e) => this.props.submitLogin(e)}>
                            <div className="input__container">
                                <label>Username</label>
                                <input type="text" name="username" id="username" autocomplete="off" />
                            </div>
                            <div className="input__container">
                                <label>Password</label>
                                <input type="password" name="password" id="password" autocomplete="off" />
                            </div>
                            <div className="input__container">
                                <button type="submit">Submit</button>
                            </div>
                        </form >

                    </section>
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
