import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './messageForm.css'

class ChatForm extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.input.value)
  }

  render() { 
    return (
      <div className={styles.chatForm}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.inputContainer}>
            <input 
                className={styles.chatInput}
                type="text"
                name="chatInput" 
                placeholder="input a message"
                ref={(input) => this.input = input} 
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

ChatForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ChatForm
