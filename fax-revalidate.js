const api = require('./api')
const moment = require('moment')
module.exports.execute = async () => {
  const response = await api.execute('/fax/revalidate', 'PUT', {})
  if (!response.ok) {
    throw new Error(response.statusText)
  }
}