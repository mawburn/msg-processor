/**
 * Run a regex on a string to match conditions & process array 
 * @param  {String} msg message to be parsed
 * @param  {Object} re  regular expression
 * @return {Array}      undefined or array of matching elements
 */
const runRegex = (msg, re) => {
  const retArr = []
  let tmpArr

  while((tmpArr = re.exec(msg)) !== null) {
    retArr.push(tmpArr[1])
  }

  return retArr.length > 0 ? retArr : undefined
}

export default runRegex