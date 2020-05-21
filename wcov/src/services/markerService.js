import MarkerRepository from '../repository/markerRepository'

const newM = new MarkerRepository()

function sendMarker(marker) {
	if(typeof marker === 'object') {
		if(marker.hasOwnProperty('icon') && marker.hasOwnProperty('coords')){
			MarkerRepository().sendMarkerToDB(marker)
		}
	}
}

function getMarker(option){
	return newM.fetchMarkersFromDB()
}

function removeMarker(markerId){
	newM.deleteMarkerOnDB(markerId)
}

export {sendMarker, getMarker, removeMarker}