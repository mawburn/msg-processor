import React from 'react'
import PropTypes from 'prop-types'
import styles from './output.css'

const Output = ({ messages }) => {
  return (
    <div className={styles.output}>
      {messages.map((msg, i) => {
        return (
          <div key={i}>
            <p>Input: {msg.input}</p>
            <div className={styles.outputDisplay}>
              Output:
              <pre>{JSON.stringify(msg.output, 2)}</pre>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Output.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    input: PropTypes.string,
    output: PropTypes.object
  }))
}

export default Output