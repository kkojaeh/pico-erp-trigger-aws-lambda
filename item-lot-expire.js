const api = require('./api')
const moment = require('moment')
module.exports.execute = async () => {
  const response = await api.execute('/item/lot-expire', 'DELETE', {
    fixedDate: new Date().toISOString()
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
}