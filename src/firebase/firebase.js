import * as firebase from 'firebase/app'

import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

// firebase init goes here
const firebaseConfig = {
  apiKey: 'AIzaSyANpXLpLrSIFsAZgNkyQaFpXRg4yWwvZEk',
  authDomain: 'sallam-55370.firebaseapp.com',
  databaseURL: 'https://sallam-55370.firebaseio.com',
  projectId: 'sallam-55370',
  storageBucket: 'sallam-55370.appspot.com',
  messagingSenderId: '345668928503',
  appId: '1:345668928503:web:522d2452d19c9ede87a4f2',
  measurementId: 'G-0WFDJXH46L',
}
firebase.initializeApp(firebaseConfig)

// firebase utils
const db = firebase.firestore()
const st = firebase.storage()
const auth = firebase.auth()
const fb = firebase
db.enablePersistence()
  .then(() => {
    console.log('Offline support enabled')
  })
  .catch(err => {
    console.log(err)
  })

export { db, auth, st, fb }
