import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

// ---> Those are only demo credentials.
const config = {
  apiKey: 'AIzaSyCERM-bU3RMzxxkwdUwYJcSjnBuS6P-usc',
  authDomain: 'ecommerce-template-8897d.firebaseapp.com',
  databaseURL:
    'https://ecommerce-template-8897d.firebaseio.com',
  projectId: 'ecommerce-template-8897d',
  storageBucket: 'ecommerce-template-8897d.appspot.com',
  messagingSenderId: '894393938087',
  appId: '1:894393938087:web:06cdd5321b22d778082b82',
  measurementId: 'G-FVZH4FEK0Y'
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any
) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ propmpt: 'select_account' })
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider)

export default firebase
