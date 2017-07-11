/**
 * Run a regex on a string to match conditions & process array 
 * @param  {String} msg message to be parsed
 * @param  {Object} re  regular expression
 * @return {Array}      undefined or array of matching elements
 */
const runRegex = (msg, re) => {
  const retArr = []
  let tmpArr

  // eslint-disable-next-line no-cond-assign
  while((tmpArr = re.exec(msg)) !== null) {
    const match = tmpArr[2].trim()

    if(match.length > 0) {
      retArr.push(match)
    }
  }

  return retArr.length > 0 ? Array.from(new Set(retArr)) : undefined
}

export default runRegex