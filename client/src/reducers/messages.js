import { types } from '../actions'

const messages = (state = [], action) => {
  switch(action.type) { 
    case types.addNew: {
      return [...state, action.message]
    }
    case types.updateLink: {
      const newState = state.map((item, index) => {
        if(item.id !== action.id) {
          return item
        }

        const newLinks = item.output.links.map((link, i) => {
          if(i !== action.index) {
            return link
          }

          return {
            url: link.url,
            title: action.title
          }
        })

        return {
          ...item,
          output: {
              ...item.output, 
              links: newLinks
          }
        }
      })

      return newState
    }
    default: {
      return state
    } 
  }
}

export default messages