import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Button, Form, FormGroup } from 'reactstrap'
import styles from './chat.css'

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
      <div className={styles.chat}>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row className={styles.inputGroup}>
            <Col xs={10}>
              <input 
                className="form-control"
                type="text"
                name="chatInput" 
                placeholder="input a message"
                ref={(input) => this.input = input} 
              />
            </Col>
            <Col xs={2}>
              <Button block color="primary" type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

ChatForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ChatForm
