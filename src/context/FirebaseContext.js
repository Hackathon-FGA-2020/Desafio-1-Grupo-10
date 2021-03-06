import React, {createContext} from 'react'
import firebase from 'firebase'

const config = {
  // Your web app's Firebase configuration
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://wcov-70df7.firebaseio.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

firebase.initializeApp(config)

const FirebaseContext = createContext(firebase)

function FirebaseProvider({children}){

    return(
      <FirebaseContext.Provider value={firebase}>
        {children}
      </FirebaseContext.Provider>
    )
}

export  {FirebaseProvider, FirebaseContext }