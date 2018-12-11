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
            <div>
                <h1>Overview</h1>
                <div>
                    {global.currentUser &&
                        <React.Fragment>
                            <div>Current User:</div>
                            <div>{global.currentUser.firstName} - {global.currentUser.lastName}</div>
                            <div>{global.currentUser.email}</div>
                        </React.Fragment>
                    }
                </div>
            </div>
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