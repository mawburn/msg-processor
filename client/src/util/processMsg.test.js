import processMsg from './processMsg'

describe('process messages correctly', () => {
  it('should process nothing', () => {
    const output = processMsg('nothing comes out of this!')
    expect(output).toEqual({})
  })

  it('should handle mentions', () => {
    const output = processMsg('@fry @bender zoidberg')
    expect(output).toEqual({
      'mentions': ['fry', 'bender']
    })
  })

  it('should handle emoticons', () => {
    const output = processMsg('@fry (benderdance) (thisMsgIsTooLongToProcess)')
    expect(output).toEqual({
      'emoticons': ['benderdance'],
      'mentions': ['fry']
    })
  })

  it('should handle urls', () => {
    const output = processMsg('@leela (flies) for http://planetexpress.com')
    expect(output).toEqual({
      'emoticons': ['flies'],
      'mentions': ['leela'],
      'links': [
        {
          'url': 'http://planetexpress.com',
          'title': ''
        }
      ]
    })
  })

  it('should handle bad mentions, emoticons, and urls', () => {
    const output = processMsg('@ filler@google.com ( ) http://')
    expect(output).toEqual({})
  })
})