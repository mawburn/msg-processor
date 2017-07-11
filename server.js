const express = require("express")
const app = express()
const request = require('request')
const cheerio = require('cheerio')

const charMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;'
}

app.set("port", process.env.PORT || 3001)

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

app.get("/api/title", (req, res) => {
  const url = req.query.url

  if (!url) { 
    res.json({error: "Missing url"})
    return 
  }

  request.get(url, (err, response, body) => {
    if(!err && response.statusCode === 200) {
      const $ = cheerio.load(body)
      const title = $('title').text().replace(/[&<>"']/g, (m) => charMap[m])

      res.send({title})
    }
  })
})

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`) // eslint-disable-line no-console
})