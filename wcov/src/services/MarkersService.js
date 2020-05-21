import { useContext } from 'react'
import {FirebaseContext} from '../context/FirebaseContext'

class MarkersService {
  
  constructor (){
    this.firebase = useContext(FirebaseContext)
    this.allMarkers = []
  }

  async get(){
    const markersRef = this.firebase.database()
    await markersRef.ref('markers').once('value', async (snapshot) =>{
      const markers = snapshot.val()
      let allMarkers = []
      for (let marker in markers) {
				allMarkers.push({
					id: marker,
					iconKind: markers[marker].iconKind,
					coords: markers[marker].coords
				})
			}
      this.allMarkers = allMarkers
    })
    return this.allMarkers
  }

  delete(markerId){
    const markersRef = this.firebase.database()
    markersRef.ref(`/markers/${markerId}`).remove()
    
  }

  post(marker){
    const markersRef = this.firebase.database().ref('markers');
    markersRef.push(marker)
  }

}

export default MarkersService