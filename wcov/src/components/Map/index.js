import React, { useEffect, useState, useContext } from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import CardInfo from '../CardInfo'
import FloatingFilter from '../../components/FloatingFilter'
import { iconFarmacia, iconHospital, iconUPA } from '../../Icon'
import MarkersService from '../../services/MarkersService'
import './style.css'
import 'leaflet/dist/leaflet.css'

function MapContainer(props){
	const [state, setState] = React.useState({
        farmaciaShow: false,
	});

	const marker = new MarkersService()
	

	const [markers, setMarkers] = useState([{coords:[55,50]}])

	
	useEffect(() => {
		marker.get().then( response =>{
			setMarkers(response)
		})

	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	function makeMarker (e) {
		const {lat, lng} = e.latlng
		if(localStorage.getItem('@createConfirm') === 'true') {
			localStorage.setItem('@position', JSON.stringify([lat, lng]))
			localStorage.setItem('@mapConfirm', true)

			var newState = markers
			if(markers[markers.length-1].id === "default"){
				newState.pop()
			}
			newState.push({
				id: 'default',
				icon: localStorage.getItem('@selectValue'),
				title: '',
				description:'',
				coords: [lat, lng],
				like: 0,
				dislike:0,
				create_at: '',
			})
			setMarkers(newState)
		}
	}

	function deleteMarker(markerId){
		marker.delete(markerId)
	}


	return (
		<>
			<FloatingFilter response={setState}	/>
			<Map 
			center={[-15.8276, -47.9218]} zoom={13} 
			className="mapContainer"
			onclick={makeMarker}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				/>
				
				{ markers.map(function (currentMark) {
					var thisMarker
					if(state.farmaciaShow === true && currentMark.icon === "pharm"){
					thisMarker = (<Marker key={currentMark.id} position={currentMark.coords} icon={iconFarmacia}>
						<Popup onClose={() => deleteMarker(currentMark.id)} >
							<CardInfo/>
						</Popup>				
					</Marker>)
					}
					if(state.hospitalShow === true && currentMark.icon === "hosp"){
						thisMarker = (<Marker key={currentMark.id} position={currentMark.coords} icon={iconHospital}>
							<Popup onClose={() => deleteMarker(currentMark.id)} >
								<CardInfo/>
							</Popup>				
						</Marker>)
					}
					if(state.UPAShow === true && currentMark.icon === "upa"){
						thisMarker = (<Marker key={currentMark.id} position={currentMark.coords} icon={iconUPA}>
							<Popup onClose={() => deleteMarker(currentMark.id)} >
								<CardInfo/>
							</Popup>				
						</Marker>)
					}
					if(state.eventosShow === true && currentMark.icon === "event"){
						thisMarker = (<Marker key={currentMark.id} position={currentMark.coords} icon={iconFarmacia}>
							<Popup onClose={() => deleteMarker(currentMark.id)} >
								<CardInfo/>
							</Popup>				
						</Marker>)
					}
					return thisMarker
					})
				}
				
			</Map>
		
		</>
	)

}

export default MapContainer