import { connect } from 'react-redux'
import Output from './Output'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const OutputContainer = connect(
  mapStateToProps,
  null
)(Output)

export default OutputContainer