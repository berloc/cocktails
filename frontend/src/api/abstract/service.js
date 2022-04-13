import axios from 'axios'

export default class Service {
  constructor(baseURL) {
    this.http = axios.create({
      baseURL,
    })
  }
}
