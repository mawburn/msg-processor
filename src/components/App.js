import React, { Component } from 'react'
import MessageForm from './MessageForm'
import Output from './Output'
import styles from './app.css'

class App extends Component {
  render() {
    return ( 
      <div className={styles.App}>
          <Output />
          <MessageForm />
      </div> 
    )
  }
}

export default App
