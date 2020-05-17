import React, { calc } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './style.css'

const position = [-15.8276, -47.9218]

//VV Tegitntando fazer funcinoar : calc(~'100vh - 100px') 
const mapSize = {
  height: "95vh",
  zIndex: 1
}

function MapContainer(){
  return (
      <div>
      <Map center={position} zoom={11} style={mapSize} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
      </Map>
      </div>
  )

}

export default MapContainer
