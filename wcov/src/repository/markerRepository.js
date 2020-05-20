import firebase from '../components/Firebase'

class MarkerRepository{
	constructor() {
		this.markersRef = firebase.database()
		this.newState = []
	}

	sendMarkerToDB(marker){
		if(marker != null) {
			this.markersRef.ref('markers').push(marker)
		}
	}

	deleteMarkerOnDB(markerId){
		this.markersRef.ref(`/markers/${markerId}`).remove()
	}

	async fetchMarkersFromDB(){
		var test
		await this.markersRef.ref('markers').once('value', (snapshot) => {	
			let markVals = snapshot.val()
			let newState = []
			for (let marker in markVals) {
				newState.push({
					id: marker,
					iconKind: markVals[marker].iconKind,
					coords: markVals[marker].coords
				})
			}
			console.log(newState)			
			this.newState = newState
			
		})
		return this.newState
	}
}

export default MarkerRepository											