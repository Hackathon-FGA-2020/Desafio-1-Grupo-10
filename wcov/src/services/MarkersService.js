import { useContext } from 'react'
import FirebaseContext from '../context/FirebaseContext'

class MarkersService {
  
  constructor (){
    this.firebase = useContext(FirebaseContext)
  }

  get(){
    const markersRef = this.firebase.database()
    markersRef.ref('markers').on('value', (snapshot) =>{
      const markers = snapshot.val()
      return markers
    })
    
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