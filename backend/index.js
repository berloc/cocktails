const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

app.use(bodyParser.json())


const staticFileMiddleware = express.static('public/dist', {
  redirect: false,
  index: 'index.html',
  extensions: ['html'],
})
app.use(staticFileMiddleware)

app.use('/api', require('./routes/api'))


app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})
