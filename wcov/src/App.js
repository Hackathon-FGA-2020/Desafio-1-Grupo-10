import React, {Component} from 'react';

import Header from './components/Header'
import MapContainer from './components/Map'
import FloatButton from './components/FloatButton'

import GlobalStyle from './styles/global'


class App extends Component{
	render() {
		return (
			<>
				<Header />
				<MapContainer />
				{/* <FloatButton /> */}
				<GlobalStyle />
			</>

		);
	}
}

export default App;
