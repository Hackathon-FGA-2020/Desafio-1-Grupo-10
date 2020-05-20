import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import firebase from '../Firebase'


import {addMarker} from '../Form'
import CardInfo from '../CardInfo'
import { iconFarmacia } from '../../Icon'
import {removeMarker, getMarker} from '../../services/markerService'


import './style.css'
import 'leaflet/dist/leaflet.css'

function MapContainer(){
	const markersRef = firebase.database()
	const [markers, setMarkers] = useState([])


useEffect(  () => {
	const newerState = getMarker()
		markersRef.ref('markers').on('value', async (snapshot) => {	
			let markVals = await snapshot.val()
			let newState = []
			for (let marker in markVals) {
				newState.push({
					id: marker,
					iconKind: markVals[marker].iconKind,
					coords: markVals[marker].coords
				})
			}
		setMarkers(newState)
		console.log(newState)

		})
		//newerState.map()
		console.log(newerState)
	},[markersRef])


	function makeMarker (e) {
			const {lat, lng} = e.latlng
			addMarker({
				iconKind: "NULL",
				coords: [lat,lng]
			})
		}

	function deleteMarker(markerId){
		removeMarker(markerId)
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