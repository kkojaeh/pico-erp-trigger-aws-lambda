const firebase = require('firebase/app')
require('firebase/auth')

const firebaseApiKey = process.env.FIREBASE_API_KEY
const firebaseUserEmail = process.env.FIREBASE_USER_EMAIL
const firebaseUserPassword = process.env.FIREBASE_USER_PASSWORD

exports = function () {
  return new Promise((resolve, reject) => {
    firebase.initializeApp({
      apiKey: firebaseApiKey
    })
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