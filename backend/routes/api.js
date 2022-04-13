const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/cocktail', async (req, res) => {
  try {
    let cocktail
    if (req.query.name !== undefined)
      cocktail = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.query.name}`)
    else cocktail = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    res.send(cocktail.data)
  } catch (e) {
    res.send('Error occurred, please try again')
  }
})

module.exports = router
