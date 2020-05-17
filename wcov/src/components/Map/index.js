import React from 'react'
import { Map, TileLayer, Marker, Popup, ZoomControl, ScaleControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import './style.css'
import CardInfo from '../CardInfo'
import { iconFarmacia } from '../../Icon'

const position = [-15.8276, -47.9218]


//VV Tentando fazer funcinoar : calc(~'100vh - 100px') 
const mapSize = {
  height: "95vh",
  zIndex: 1
} 

function MapContainer(){

	const [markers, setMarkers] = React.useState([[-15.8276, -47.9218]]);


	const addmarker = (e) => {
		const umarkers = markers
		const{lat, lng} = e.latlng
		const newPos = [[lat, lng]]
		umarkers.push(newPos)
		setMarkers(umarkers)
	}

  function handleCardInfo(){}

  return (
      <div>
	  <Map 
	    center={position} zoom={11} 
		style={mapSize}
		onClick={addmarker} 
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
		{markers.map((position) =>
		  <Marker key={'marker-${idx}'} position={position}>
			<Popup>
            	<span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          	</Popup>
		  </Marker>
		)}


      </Map>
      </div>
  )

}

export default MapContainer
