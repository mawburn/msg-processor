import { connect } from 'react-redux'
import { consumeMsg } from '../actions'
import ChatForm from '../components/ChatForm'

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

const ChatFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatForm)

export default ChatFormContainer