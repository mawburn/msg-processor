import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './chat.css'

class Chat extends Component {
  render() { 
    return (
      <div className={styles.chat}>
        xyz
      </div>
    )
  }
}

Chat.propTypes = {
  update: PropTypes.func
}

export default Chat
