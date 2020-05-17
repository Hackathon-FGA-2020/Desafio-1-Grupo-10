import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import {Container} from './style'

const position = [-15.8276, -47.9218]

const mapSize = {
  height:'100vh',
  zIndex: 1
}

function MapContainer(){
  return (
    <Container>
      <Map center={position} zoom={11} style={mapSize} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
      </Map>
    </Container>
  )

}

export default MapContainer
