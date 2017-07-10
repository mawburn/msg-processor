import runRegex from './runRegex'

/**
 * Process messages for matching conditions
 * @param  {String} msg message to be parsed
 * @return {Object}     object containing matching conditions
 */
const processMsg = (msg) => {
  const reMention = /(^|\s)@([a-zA-Z0-9_.]*)/gi
  const reEmoticon = /(^|\s)\(([a-zA-Z0-9_.]{1,15})\)/gi
  const reLink = /(^|\s)(https?:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\b[-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

  let retObj = {}

  const mentions = runRegex(msg, reMention)
  const emoticons = runRegex(msg, reEmoticon)
  const links = runRegex(msg, reLink)

  if(mentions) {
    retObj.mentions = mentions
  }

  if(emoticons) {
    retObj.emoticons = emoticons
  }

  if(links) {
    retObj.links = links.map(link => { 
      return { url: link, title: '' }
    })
  }

  return retObj
}

export default processMsg