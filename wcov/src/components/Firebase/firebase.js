import app from 'firebase/app'
import 'firebase/database'

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

function Firebase() {
  app.initializeApp(config)
  var datab = app.database()
}

export default Firebase;