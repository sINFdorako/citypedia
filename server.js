const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const router = express.Router()
app.use(express.static(`${__dirname}/dist`))
app.use('/node_modules', express.static(`${__dirname}/node_modules`)) // set the static files location for the static html
app.engine('.html', require('ejs').renderFile)
app.set('views', `${__dirname}/dist`)
router.get('/*', (req, res, next) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})
app.use('/', router)
app.listen(port)
console.log('App running on port', port)
