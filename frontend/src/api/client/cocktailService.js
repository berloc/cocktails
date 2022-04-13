import Service from '../abstract/service.js'

export default class CocktailService extends Service {
  constructor() {
    super(process.env.VUE_APP_COCKTAIL_SERVICE)
  }

  getRandom() {
    return this.http.get('/cocktail')
  }

  getByName(name) {
    return this.http.get(`/cocktail?name=${name}`)
  }
}
