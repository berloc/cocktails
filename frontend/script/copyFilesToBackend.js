const fs = require('fs-extra')

fs.copy('./dist/', '../backend/public/dist/', (err) => {
  if (err) return console.error(err)
  console.log('Completed')
})
