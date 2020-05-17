import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import './style.css'
import CardInfo from '../CardInfo'
import { iconFarmacia } from '../../Icon'

const position = [-15.8276, -47.9218]


//VV Tegitntando fazer funcinoar : calc(~'100vh - 100px') 
const mapSize = {
  height: "95vh",
  zIndex: 1
} 

function MapContainer(){


  function handleCardInfo(){}

  return (
      <div>
      <Map center={position} zoom={11} style={mapSize} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />

          <Marker position={position} 
          icon={iconFarmacia}
          
          draggable
          onclick={handleCardInfo}
          >
          <Popup>Farmacia</Popup>
          </Marker>

      </Map>
      </div>
  )

}

export default MapContainer
