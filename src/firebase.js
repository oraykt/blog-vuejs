import Firebase from 'firebase'
import firebaseConfig from '../config/firebase'

const firebaseApp = Firebase.initializeApp(firebaseConfig)

const db = firebaseApp.database()

export default db
