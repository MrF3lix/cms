import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser, getAllUsers, getAllArticles } from '../actions/global-actions'

class Overview extends React.Component {
    componentDidMount() {
        if (!this.props.global.currentUser) {
            this.props.getCurrentUser()
        }
        this.props.getAllUsers()
        this.props.getAllArticles()
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
                                <h2>Current User</h2>
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
                                    {global.users.map((user, i) => (
                                        <tr key={i} className={user._id == global.currentUser._id && 'active'}>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{new Date(user.createdDate).toLocaleString()}</td>
                                            <td></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </React.Fragment>
                    </section>
                    <section>
                        <React.Fragment>
                            <h2>Content</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Element</th>
                                        <th>Title</th>
                                        <th>Content</th>
                                        <th>Created at</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {global.articles.map((article, i) => (
                                        <tr ley={i}>
                                            <td>{article.element}</td>
                                            <td>{article.title}</td>
                                            <td>{article.content}</td>
                                            <td>{new Date(article.createdDate).toLocaleString()}</td>
                                            <td></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </React.Fragment>
                    </section>
                </div>
            </main >
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})
const mapDispatchToProps = dispatch => ({
    getCurrentUser: () => dispatch(getCurrentUser()),
    getAllUsers: () => dispatch(getAllUsers()),
    getAllArticles: () => dispatch(getAllArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview)