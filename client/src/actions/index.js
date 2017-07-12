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
        }
      })
      .then(json => {
        dispatch(updateLink(id, index, json.title))
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