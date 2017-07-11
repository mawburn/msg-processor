import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './messageForm.css'

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.input.value.trim())
    this.input.value = ''
  }

  render() { 
    return (
      <div className={styles.msgForm}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.inputContainer}>
            <input 
                className={styles.input}
                type="text"
                name="messageInput" 
                placeholder="input a message"
                ref={(input) => this.input = input} 
            />
          </div>
          <div className={styles.btnContainer}>
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default MessageForm
