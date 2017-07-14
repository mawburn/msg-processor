import shortid from 'shortid'
import processMsg from '../util/processMsg'

export const types = {
  addNew: 'ADD_NEW_MESSAGE',
  updateLink: 'UPDATE_LINK'
}

export const addNew = (message) => ({
  type: types.addNew,
  message
})

export const updateLink = (id, index, title) => ({
  type: types.updateLink,
  id,
  index,
  title
})

export const fetchTitle = (id, index, link) => dispatch => {
  return fetch(`api/title?url=${link.url}`)
      .then(response => {
        if(response.status >= 200 && response.status < 300) {
          return response.json()
        } else if (response.status === 422) {
          throw new Error('Missing Parameter') 
        }

        throw new Error('API Server Response') 
      })
      .then(json => {
        if(json.title) {
          return dispatch(updateLink(id, index, json.title))
        } 
        
        throw new Error('Unknown Fetch Error')
      })
      .catch(e => {
        dispatch(updateLink(id, index, e.toString()))
      })
}

export const consumeMsg = (msg) => dispatch => {
  const msgObj = processMsg(msg)
  const id = shortid.generate()

  const newMsg = {
    id,
    input: msg,
    output: msgObj
  }

  dispatch(addNew(newMsg))

  if(msgObj.links) {
    msgObj.links.forEach((link, i) => {
      dispatch(fetchTitle(id, i, link))
    })
  }
}