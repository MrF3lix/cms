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
                <div className="login__container">
                    <div className="inner inner--small">
                        <form onSubmit={this.props.submitRegister}>
                            <div className="title">Register</div>
                            <div className="input__container">
                                <div className="input__label input__label--touched">Username</div>
                                <input type="text" name="username" id="username" />
                            </div>
                            <div className="input__container">
                                <div className="input__label input__label--touched">Firstname</div>
                                <input type="text" name="firstName" id="firstName" />
                            </div>
                            <div className="input__container">
                                <div className="input__label input__label--touched">Lastname</div>
                                <input type="text" name="lastName" id="lastName" />
                            </div>
                            <div className="input__container">
                                <div className="input__label input__label--touched">Email</div>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="input__container">
                                <div className="input__label input__label--touched">Password</div>
                                <input type="password" name="password" id="password" />
                            </div>
                            <div className="input__container">
                                <button type="submit">Submit</button>
                            </div>
                        </form >
                    </div>
                </div>
                {isAuthenticated === true &&
                    <Redirect to={'/cms'} />
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
