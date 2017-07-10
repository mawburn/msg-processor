import { types } from '../actions'

const messages = (state = [], action) => {
  switch(action.type) { 
    case types.addNew: {
      return [...state, action.message]
    }
    default: {
      return state
    } 
  }
}

export default messages