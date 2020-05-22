import React, { useEffect, useState} from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import FloatButton from '../../components/FloatButton'
import CardInfo from '../CardInfo'
import FloatingFilter from '../../components/FloatingFilter'
import { iconFarmacia, iconHospital, iconUPA, iconEvento} from '../../Icon'
import MarkersService from '../../services/MarkersService'
import './style.css'
import 'leaflet/dist/leaflet.css'

function MapContainer(props){
	const [state, setState] = React.useState({
        eventosShow: true,
	});
	const [dummy, setDummy] = React.useState()
	const marker = new MarkersService()
	

	const [markers, setMarkers] = useState([{coords:[55,50]}])

	useEffect(() => {
		var newState
		marker.get('markers').then( response =>{
			newState = response
		}).then(
		marker.get('defaultMarkers').then(response =>{
			setMarkers(newState.concat(response))
		}))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	function makeMarker (e) {
		const {lat, lng} = e.latlng
		if(localStorage.getItem('@createConfirm') === 'true') {
			localStorage.setItem('@position', JSON.stringify([lat, lng]))
			localStorage.setItem('@mapConfirm', true)
			localStorage.setItem('@createConfirm', false)

			var newState = markers
			if(markers[markers.length-1].id === "default"){
				newState.pop()
			}
			newState.push({
				id: 'default',
				icon: localStorage.getItem('@selectValue'),
				name: localStorage.getItem('@selectValue'),
				description: localStorage.getItem('@formsMessage'),
				coords: [lat, lng],
				like: 0,
				dislike:0,
				create_at: '',
			})

			setMarkers(newState)
			setDummy(Math.random())
			
		}
	}

	function deleteMarker(markerId){
		marker.delete(markerId)
	}


	return (
		<>
			<FloatingFilter response={setState}	/>
			<FloatButton mydummy={localStorage.getItem('@mapConfirm')}/>
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
						<Popup >
							<CardInfo
								titleCard={currentMark.name}
								descriptionCard={currentMark.description}
							/>
						</Popup>				
					</Marker>)
					}
					if(state.hospitalShow === true && currentMark.icon === "hosp"){
						thisMarker = (<Marker key={currentMark.id} position={currentMark.coords} icon={iconHospital}>
							<Popup >
								<CardInfo
									titleCard={currentMark.name}
									descriptionCard={currentMark.description}
								/>
							</Popup>				
						</Marker>)
					}
					if(state.UPAShow === true && currentMark.icon === "UPA"){
						thisMarker = (<Marker key={currentMark.id} position={currentMark.coords} icon={iconUPA}>
							<Popup >
								<CardInfo
									titleCard={currentMark.name}
									descriptionCard={currentMark.description}
								/>
							</Popup>				
						</Marker>)
					}
					if(state.eventosShow === true && (currentMark.icon === "event" || currentMark.icon === "mascara" || currentMark.icon === "cesta" || currentMark.icon === "outro")){
						thisMarker = (<Marker dummy={dummy} key={currentMark.id} position={currentMark.coords} icon={iconEvento}>
							<Popup >
								<CardInfo
									cardType={currentMark.icon}
									titleCard={currentMark.name}
									descriptionCard={currentMark.description}
								/>
							</Popup>				
						</Marker>)
					}
					if(currentMark.id === "default"){
						thisMarker = (<Marker dummy={dummy} key={currentMark.id} position={currentMark.coords} icon={iconEvento}>
							<Popup >
								<CardInfo
									titleCard={currentMark.name}
									descriptionCard={currentMark.description}
								/>
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