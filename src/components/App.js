import React, { Component } from 'react'
import ChatForm from '../containers/ChatForm'
import Output from '../containers/Output'
import styles from './chat.css'

class App extends Component {
  render() {
    return ( 
      <div className={styles.App}>
          <Output />
          <ChatForm />
      </div> 
    )
  }
}

export default App
