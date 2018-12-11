import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { closeMessage } from '../../actions/message-actions.jsx'

const Messages = ({ messages, closeMessage }) => {
    if (messages.length >= 0) {
        return (
            <div className="messages__container">
                {messages.filter(m => !m.hidden).map((message, i) => {
                    if (i >= 3) return
                    return (
                        <div
                            className={classNames('message__container', {
                                'message__container--error': message.type == 'error',
                                'message__container--info': message.type == 'info',
                                'message__container--warning': message.type == 'warning'
                            })}
                            key={i}>
                            <div className="message__content">
                                {message.content}
                            </div>
                            <div className="message__close" onClick={() => closeMessage(message.id)}>
                                close
                            </div>
                        </div>
                    )

                })}
            </div>
        )
    } else {
        return <React.Fragment></React.Fragment>
    }
}

const mapStateToProps = state => ({
    messages: state.messages.items
})

const mapDispatchToProps = dispatch => ({
    closeMessage: id => dispatch(closeMessage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages)