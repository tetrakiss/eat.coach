import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCi2OHsuMg06siogpSJK5os-wboCII46pg',
  authDomain: 'eat-coach.firebaseapp.com',
  databaseURL: 'https://eat-coach.firebaseio.com',
  projectId: 'eat-coach',
  storageBucket: 'eat-coach.appspot.com',
  messagingSenderId: '613734339586'
})

export const db = firebaseApp.firestore()
