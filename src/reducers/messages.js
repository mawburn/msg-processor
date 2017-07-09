import { types } from '../actions'

const defaultState = {
  messages: []
} 

const messages = (state = defaultState, action) => {
  switch(action.type) { 
    case types.addNew: {
      const messages = state.messages

      messages.push(action.message)

      return {...state, messages}
    }
    default: {
      return state
    } 
  }
}

export default messages