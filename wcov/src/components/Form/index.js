import React from 'react'
import {Slide} from "@material-ui/core"
import { Button, Card, CardContent, CardActions, Select, TextField, InputLabel, MenuItem} from '@material-ui/core'
import firebase, { FirebaseContext } from '../Firebase'


import './style.css'


function Form (){

  function handleChange(buttonName){
	if(buttonName === "Fechar"){
		
	}  
	else {
		const markersRef = firebase.database().ref('markers');
		const marker = {
			id: 2,
			coords: [-59,-40]
		}
		//markersRef.push(marker)
	}

  }

  return (
    
	<Slide direction="left" mountOnEnter unmountOnExit className="containerForm"  in={true} >
		<form onSubmit={()=>{}} >
        
      <div>
        <label className="titleForm">
          Quer avisar sobre algum evento?
        </label>
      </div>
      <div>
        <label className="textForm">
          Esta área é destinada para que os usuários possam compartilhar sobre eventos nas proximidades.
        </label>
      </div>
      <hr className="linhaDivisoria"></hr>
      <div>
          <InputLabel id="a">Selecione um evento</InputLabel>
          <Select className="selectBox"
            id="a"
          >
            <MenuItem value="mango">Mango</MenuItem>
          </Select>
          <div/>
			  <TextField label="Descrição" variant="filled" multiline rows={4}/>
      </div>

      <div>
        <Button class="buttonMarcarnoMapa" onClick={()=>handleChange()}>MARCAR NO MAPA</Button>
      </div>

      <div class= "containerButtonForm" >
        <Button class="buttonCriar" type="submit" >CRIAR</Button>
        <Button class="buttonFechar">FECHAR</Button>
      </div>    

		</form>
    
	</Slide>
  )
}
  

export default Form





































