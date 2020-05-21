import React, { useEffect, useState, useContext } from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'

import CardInfo from '../CardInfo'
import { iconFarmacia } from '../../Icon'
import MarkersService from '../../services/MarkersService'

import './style.css'
import 'leaflet/dist/leaflet.css'

function MapContainer(){

	const marker = new MarkersService()

	
	console.log( localStorage.getItem('@position') )
	console.log(localStorage.getItem('@createConfirm'))
	

	const [markers, setMarkers] = useState([{
		id: "A",
		coords: [50,50]
	}])

	
	useEffect(() => {
		marker.get().then( response =>{
			setMarkers(response)
		})

	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	function makeMarker (e) {
		const {lat, lng} = e.latlng
	
		localStorage.setItem('@position',[lat, lng])

	}

	function deleteMarker(markerId){
		marker.delete(markerId)
	}


	return (

		<>
			<Map 
			center={[-15.8276, -47.9218]} zoom={13} 
			className="mapContainer"
			onclick={makeMarker}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				/>
				
				{ markers.map((currentMark) => ( 
					<Marker key={currentMark.id} position={currentMark.coords} icon={iconFarmacia}>
						<Popup onClose={() => deleteMarker(currentMark.id)} >
							<CardInfo/>
						</Popup>				
					</Marker>
					))
				}
				
			</Map>
		
		</>
	)

}

export default MapContainer