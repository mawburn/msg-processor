import React, { Component } from 'react'
import { Container } from 'reactstrap'
import ChatFormContainer from '../containers/ChatForm'
import styles from './chat.css'

class App extends Component {
  render() {
    return ( 
      <Container className={styles.App}>
        <ChatFormContainer />
      </Container> 
    )
  }
}

export default App
