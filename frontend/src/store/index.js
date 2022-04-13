import Vuex from 'vuex'
import API from '../api'

const files = require.context('./modules', true, /\index.js$/)
const modules = {}
const content = {}

files.keys().forEach((key) => {
  const moduleName = key
      .replace(/(\.\/|\/index.js)/g, '')
      .split('/')
      .map((e, i) => (i > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e))
      .join('')
  modules[moduleName] = files(key).default(content)
})

const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
})

store.$api = API

export default store