import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import MessageForm from './MessageForm'
import Output from './Output'

class App extends Component {
  render() {
    return ( 
      <Grid>
        <Row>
          <Col xs={12}>
            <Output />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <MessageForm />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
