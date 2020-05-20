import React from 'react';
import { BrowserRouter } from 'react-router-dom'

// import {MarkerProvider } from './context/MarkerContext'
// import { FirebaseProvider } from './context/FirebaseContext'

import Routes from './routes'
import './styles/global.css'

export default function App(){

	return(
		<BrowserRouter>
		{/* <FirebaseProvider> */}
			{/* <MarkerProvider> */}
				<Routes />
			{/* </MarkerProvider> */}
		{/* </FirebaseProvider> */}
		</BrowserRouter>
	)
}


