import React from 'react';
import Header from './components/Header'
import MapContainer from './components/Map'
import FloatButton from './components/FloatButton'

import './styles/global.css'

export default function App(){

	return(
		<>
			<Header />
			<MapContainer/>
			<FloatButton/>
		</>
	)
}


