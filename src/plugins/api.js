const fetch = require('node-fetch')
const firebase = require('./firebase')
const apiBaseUrl = process.env.API_BASE_URL
exports = async (relativeUrl, method, body) => {
  const token = await firebase()
  const options = {
    method: method,
    headers: {
      'Accept': 'application/vnd.acepk.v1+json',
      'Content-Type': 'application/vnd.acepk.v1+json',
      'X-Firebase-Auth': token
    },
    body: JSON.stringify(body)
  }
  await fetch(`${apiBaseUrl}/${relativeUrl}`, options)
}

