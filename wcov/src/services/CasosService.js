import { useContext } from 'react'
import {FirebaseContext} from '../context/FirebaseContext'

class CasosService {
  
  constructor (){
    this.firebase = useContext(FirebaseContext)
    this.allCasos = []
  }

  async get(route){
    const casesRef = this.firebase.database()
    await casesRef.ref(route).once('value', async (snapshot) =>{
      const casos = snapshot.val()
      let allCasos = []
      for (let caso in casos) {
		  allCasos.push({
          id: caso,
          data: casos[caso].Data,
          estado: casos[caso].Estado,
          faixa: casos[caso].FaixEt,
          regiao: casos[caso].RA,
          sexo: casos[caso].Sexo,
			  })
		  }
      this.allCasos = allCasos
    })
    return this.allCasos
  }

}

export default CasosService