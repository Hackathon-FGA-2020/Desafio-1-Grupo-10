import React, { useEffect } from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {removeMarker, getMarker} from '../../services/markerService'
import firebase from '../Firebase'
import './style.css'
import { iconFarmacia } from '../../Icon'
import CardInfo from '../CardInfo'
import {addMarker} from '../Form'


const position = [-15.8276, -47.9218]

//VV Tentando fazer funcionar : calc(~'100vh - 100px') 
const mapSize = {
  height: "95vh",
  zIndex: 1
}



function MapContainer(){
	const markersRef = firebase.database()

	const [markers, setMarkers] = React.useState([{
		id: "0",
		iconKind: "NULL",
		coords: [-5,-5]
	}])


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
	},[])

	const makeMarker = (e) => {
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
      <div>
	  <Map 
	    center={position} zoom={13} 
		style={mapSize}
		onclick={makeMarker}
      >
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
			/>
		
		{markers.map((currentMark) =>
			<>

			<Marker 
			key={currentMark.id} 
			position={currentMark.coords}
			icon={iconFarmacia}>
				<Popup onClose={() => deleteMarker(currentMark.id)} >
					<CardInfo/>
				</Popup>				
			</Marker>

			</>
		)}
	

      </Map>
      </div>
  )

}

export default MapContainer