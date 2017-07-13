import thunk from 'redux-thunk'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import * as actions from './'

jest.mock('shortid')
import shortid from 'shortid' // eslint-disable-line 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('message actions', () => {
  it('addNew should create a ADD_NEW_MESSAGE action', () => {
    expect(actions.addNew({})).toEqual({
      type: actions.types.addNew,
      message: {}
    })
  })

  it('updateLink should create an UPDATE_LINK action', () => {
    expect(actions.updateLink(1, 1, 'Futurama')).toEqual({
      type: actions.types.updateLink,
      id: 1,
      index: 1,
      title: 'Futurama'
    })
  })

  it('addNew should create a ADD_NEW_MESSAGE action', () => {
    nock('http://localhost')
      .get('/api/title')
      .query({url: 'http://futurama.com'})
      .reply(200, {title: 'Good News Everyone!'})

    jest.mock('shortid')
    shortid.mockImplementation(() => 'BENDER')

    const expectedActions = [
      { type: 'ADD_NEW_MESSAGE',
        message: { 
          id: 'BENDER',
          input: 'Remember Me!',
          output: {} 
        } 
      }
    ]

    const store = mockStore({messages: []})

    store.dispatch(actions.consumeMsg('Remember Me!'))
    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates UPDATE_LINK when fetching url title has been done', () => {
    nock('http://localhost')
      .get('/api/title')
      .query({url: 'http://futurama.com'})
      .reply(200, {title: 'Good News Everyone!'})

    const expectedActions = [ 
      {type: 'UPDATE_LINK', id: 1, index: 1, title: 'Good News Everyone!' }
    ]

    const store = mockStore({messages: []})

    return store.dispatch(actions.fetchTitle(1, 1, {url: 'http://futurama.com'})).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})