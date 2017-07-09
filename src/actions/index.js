export const types = {
  addNew: 'ADD_NEW_MESSAGE'
}

export const addNew = (message) => ({
  type: types.addNew,
  message
})