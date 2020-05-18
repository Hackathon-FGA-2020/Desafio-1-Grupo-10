import React from 'react'
import { Map, TileLayer, Marker, Popup, ZoomControl, ScaleControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import './style.css'
import { iconFarmacia } from '../../Icon'
import CardInfo from '../CardInfo'


const position = [-15.8276, -47.9218]
var enabler

//VV Tentando fazer funcinoar : calc(~'100vh - 100px') 
const mapSize = {
  height: "95vh",
  zIndex: 1
}

const reverseEnabler = () => {
  enabler = !enabler
}

function MapContainer(){

	const [markers, setMarkers] = React.useState([[-15.8276, -47.9218]]);
  
	const addmarker = (e) => {
    if(enabler == true){
      const {lat, lng} = e.latlng
      const newPos = [lat, lng]
      setMarkers([...markers, newPos])
      reverseEnabler()
    }
	}

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

		{markers.map((position, idx) =>
      <Marker 
      key={`marker-${idx}`} 
      position={position}
      icon={iconFarmacia}>
			<Popup>
				<CardInfo/>
      </Popup>
		  </Marker>
      
		)}


      </Map>
      </div>
  )

}

export default MapContainer
export {reverseEnabler}
