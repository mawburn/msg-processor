import { connect } from 'react-redux'
import { addNew } from '../actions'
import ChatForm from '../components/ChatForm'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (newMessage) => dispatch(addNew(newMessage))
  }
}

const ChatFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatForm)

export default ChatFormContainer