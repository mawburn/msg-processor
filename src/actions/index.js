import processMsg from '../util/processMsg'

export const types = {
  addNew: 'ADD_NEW_MESSAGE'
}

export const addNew = (message) => ({
  type: types.addNew,
  message
})

export const consumeMsg = (msg) => dispatch => {
  const msgObj = processMsg(msg)

  const newMsg = {
    input: msg,
    output: msgObj
  }

  dispatch(addNew(newMsg))
}