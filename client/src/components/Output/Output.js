import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './output.css'

class Output extends Component {
  constructor(props) {
    super(props)
    this.renderMsg = this.renderMsg.bind(this)
  }

  componentDidUpdate() {
    this.bottomNode.scrollIntoView()
  }

  renderMsg(msg) {
    return (
      <div key={msg.id} className={styles.message} ref={node => { this.bottomNode = node }}>
        <p><span className={styles.label}>Input:</span> {msg.input}</p>
        <div className={styles.outputDisplay}>
          <p className={styles.label}>Output:</p>
          <pre className={styles.json}>{JSON.stringify(msg.output, null, 2)}</pre>
        </div>
      </div>
    )
  }

  render() {
    const { messages } = this.props

    return (
      <div className={styles.output}>{messages.map(this.renderMsg)}</div>
    )
  }  
}

Output.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    input: PropTypes.string,
    output: PropTypes.object
  }))
}

export default Output
