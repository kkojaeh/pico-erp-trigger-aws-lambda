const fetch = require('node-fetch')
const firebase = require('firebase/app')
require('firebase/auth')

const apiBaseUrl = process.env.API_BASE_URL
const firebaseApiKey = process.env.FIREBASE_API_KEY
const firebaseUserEmail = process.env.FIREBASE_USER_EMAIL
const firebaseUserPassword = process.env.FIREBASE_USER_PASSWORD
let firebaseApp

function authorize() {
  return new Promise((resolve, reject) => {
    if (!firebaseApp) {
      firebaseApp = firebase.initializeApp({
        apiKey: firebaseApiKey
      })
    }
    const auth = firebase.auth()
    auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
    auth.signInWithEmailAndPassword(firebaseUserEmail, firebaseUserPassword)
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken(true)
        resolve(token)
      }
    })
  })
}

module.exports.execute = async (relativeUrl, method, body) => {
  const token = await authorize()
  const options = {
    method: method,
    headers: {
      'Accept': 'application/vnd.acepk.v1+json',
      'Content-Type': 'application/vnd.acepk.v1+json',
      'X-Firebase-Auth': token
    },
    body: JSON.stringify(body)
  }
  return await fetch(`${apiBaseUrl}/${relativeUrl}`, options)
}

