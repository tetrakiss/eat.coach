import { firebase } from "@firebase/app"
import "@firebase/firestore"
import "@firebase/auth"
import firebaseConfig from "./firebaseConfig"
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {auth, db}
