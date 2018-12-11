import React from 'react'
import { connect } from 'react-redux'
import { updateIsPageLoaded, submitRegister } from '../actions/global-actions'
import { Redirect } from 'react-router-dom'

class Register extends React.Component {
    componentDidMount() {
        this.props.updateIsPageLoaded()
    }

    render() {
        const { isAuthenticated } = this.props.global
        return (
            <main>
                <div className="inner inner--small">
                    <section className="register__container">
                        <h2>Register</h2>
                        <form onSubmit={this.props.submitRegister}>
                            <div className="input__container">
                                <label>Username</label>
                                <input type="text" name="username" id="username" />
                            </div>
                            <div className="input__container">
                                <label>Firstname</label>
                                <input type="text" name="firstName" id="firstName" />
                            </div>
                            <div className="input__container">
                                <label>Lastname</label>
                                <input type="text" name="lastName" id="lastName" />
                            </div>
                            <div className="input__container">
                                <label>Email</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="input__container">
                                <label>Password</label>
                                <input type="password" name="password" id="password" />
                            </div>
                            <div className="input__container">
                                <button type="submit">Submit</button>
                            </div>
                        </form >
                    </section>
                </div>
                {isAuthenticated === true &&
                    <Redirect to={'/login'} />
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
    submitRegister: (e) => dispatch(submitRegister(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
