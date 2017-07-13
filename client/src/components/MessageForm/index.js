import { connect } from 'react-redux'
import { consumeMsg } from '../../actions'
import MessageForm from './MessageForm'

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (newMessage) => dispatch(consumeMsg(newMessage))
  }
}

const MessageFormContainer = connect(
  null,
  mapDispatchToProps
)(MessageForm)

export default MessageFormContainer