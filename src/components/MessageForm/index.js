import { connect } from 'react-redux'
import { consumeMsg } from '../../actions'
import MessageForm from './MessageForm'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (newMessage) => dispatch(consumeMsg(newMessage))
  }
}

const MessageFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm)

export default MessageFormContainer