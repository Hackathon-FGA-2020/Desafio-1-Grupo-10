import React from 'react'
import {Slide, FormControl} from "@material-ui/core"
import { Button, Card, CardContent, CardActions, TextField, InputLabel, Select, MenuItem} from '@material-ui/core'
import firebase, { FirebaseContext } from '../Firebase'


import './style.css'

var markEnabled

function addMarker(marker){
	if(markEnabled === true) {
		markEnabled = !markEnabled
		const markersRef = firebase.database().ref('markers');
		markersRef.push(marker)
	}
}

function Form (props){

  function handleChange(buttonName){
	if(buttonName === "Fechar"){
		props.event(false)
	}  
	else if(buttonName === "Marcar")
	{
		markEnabled = !markEnabled
	}

  }

  const evento = []

  return (
    
	<Slide direction="left" mountOnEnter unmountOnExit className="containerForm"  in={props.display} >
		<form onSubmit={()=>{}} >
        
      <div>
        <label class="titleForm">
          Quer avisar sobre algum evento?
        </label>
      </div>
      <div>
        <label class="textForm">
          Esta área é destinada para que os usuários possam compartilhar sobre eventos nas proximidades.
        </label>
      </div>
      <hr class="linhaDivisoria"></hr>
      <div>
		  <FormControl className="formControl">
			<InputLabel id="inital">Selecione um evento</InputLabel>
			<Select
				labelId="initial"
				id="inital-2"
				className="selectBox"
				
				onChange={handleChange}
			>
				<MenuItem value={'mascara'}>Distribuição de máscaras</MenuItem>
				<MenuItem value={20}>Twen</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		  </FormControl>
      <div/>
			  <TextField label="Descrição" variant="filled" multiline rows={4} className="descricaoBox"/>
      </div>

      <div>
        <Button class="buttonMarcarnoMapa" onClick={()=>handleChange("Marcar")}>MARCAR NO MAPA</Button>
      </div>

      <div class="containerButtonForm" >
        <Button class="buttonCriar" type="submit" >CRIAR</Button>
        <Button class="buttonFechar" onClick={()=>handleChange("Fechar")}>FECHAR</Button>
      </div>    

		</form>
    
	</Slide>
  )
}
  

export default Form
export {addMarker}