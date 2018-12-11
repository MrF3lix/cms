import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/global-actions'

class Overview extends React.Component {
    componentDidMount() {
        if (!this.props.global.currentUser) {
            this.props.getCurrentUser()
        }
    }

    render() {
        const { global } = this.props
        return (
            <main>
                <div className="inner">
                    <h1>Overview</h1>
                    <section>
                        {global.currentUser &&
                            <React.Fragment>
                                <h2>Current User:</h2>
                                <div>{global.currentUser.firstName} - {global.currentUser.lastName}</div>
                                <div>{global.currentUser.email}</div>
                            </React.Fragment>
                        }
                    </section>
                    <section>
                        <React.Fragment>
                            <h2>Users</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Created at</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {global.currentUser &&
                                        <tr className="active">
                                            <td>{global.currentUser.username}</td>
                                            <td>{global.currentUser.email}</td>
                                            <td>{global.currentUser.firstName}</td>
                                            <td>{global.currentUser.lastName}</td>
                                            <td>{new Date(global.currentUser.createdDate).toLocaleString()}</td>
                                            <td></td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </React.Fragment>
                    </section>
                    <section>
                        <React.Fragment>
                            <h2>Content</h2>
                        </React.Fragment>
                    </section>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})
const mapDispatchToProps = dispatch => ({
    getCurrentUser: () => dispatch(getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview)