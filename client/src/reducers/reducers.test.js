import reducer from './messages'
import * as actions from '../actions'

describe('messages reducer', () => {
  it('should return an initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it(`should handle ${actions.types.addNew}`, () => {
    const mockMsg = {id: 1, input: '1', output: {}}
    expect(reducer([], {type: actions.types.addNew, message: mockMsg}))
      .toEqual([mockMsg])
  })

  it(`should handle ${actions.types.updateLink}`, () => {
    const initialState = [
      {id: 'NOT_FRY'},
      {id: 'ZOIDBERG'},
      {
        id: 'FRY',
        input: 'http://futurama.com',
        output: {
          links: [
            {
              'url': 'http://dummylink',
              'title': ''
            },
            { 
              'url': 'http://futurama.com',
              'title': ''
            }
          ]
        }
      }
    ]

    const mockAction = {
      type: actions.types.updateLink,
      id: 'FRY',
      index: 1,
      title: 'Did everything just taste purple for a second?'
    }
    
    expect(reducer(initialState, mockAction))
      .toEqual([
        {"id": "NOT_FRY"}, 
        {"id": "ZOIDBERG"},
        {
          "id": "FRY", 
          "input": "http://futurama.com", 
          "output": 
          {
            "links": [
              {
                "title": "",
                "url": "http://dummylink"
              },
              {
                "title": "Did everything just taste purple for a second?", 
                "url": "http://futurama.com"
              } 
            ]
          }
        }
      ])
  })
})