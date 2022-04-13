const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/cocktail', async (req, res) => {
  console.debug(
    JSON.stringify({
      message: 'Incoming request to get cocktails',
      'trace-id': req.headers['trace-id'],
      timeStamp: new Date(),
      'app-name': req.headers['app-name'],
      'user-agent': req.headers["user-agent"]
    })
  )
  try {
    let cocktail
    if (req.query.name !== undefined)
      cocktail = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.query.name}`)
    else cocktail = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    res.send(cocktail.data)
    console.debug({
      message: `Returning the following response: ${JSON.stringify(cocktail.data)}`,
      timeStamp: new Date(),
    })
  } catch (e) {
    res.send('Error occurred, please try again')
    console.debug({ message: `Error occurred during the api call`, timeStamp: new Date() })
  }
})

module.exports = router
