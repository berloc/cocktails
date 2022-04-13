const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/cocktail', async (req, res) => {
  try {
    let randomCocktail = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    res.send(randomCocktail.data)
  } catch (e) {
    res.send('Error occurred, please try again')
  }
})


module.exports = router
