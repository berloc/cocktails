import Service from '../abstract/service.js'
import { v4 as uuidv4 } from 'uuid'

export default class CocktailService extends Service {
  constructor() {
    super(process.env.VUE_APP_COCKTAIL_SERVICE)
  }

  getRandom() {
    const headers = {
      'app-name': 'CocktailFrontend',
      'trace-id': uuidv4(),
    }
    return this.http.get('/cocktail', {
      headers,
    })
  }

  getByName(name) {
    const headers = {
      'app-name': 'CocktailFrontend',
      'trace-id': uuidv4(),
    }
    return this.http.get(`/cocktail?name=${name}`, {
      headers,
    })
  }
}
