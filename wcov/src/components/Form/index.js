import React from 'react'
import {Slide, FormControl} from "@material-ui/core"
import { Button, Card, CardContent, CardActions, TextField, InputLabel, Select, MenuItem} from '@material-ui/core'
import firebase, { FirebaseContext } from '../Firebase'
import Alerta from "../Alert"

import './style.css'

var markEnabled
var markObject

function addMarker(marker){
	if(markEnabled === true) {
		markEnabled = !markEnabled
		const markersRef = firebase.database().ref('markers');
		markersRef.push(marker)
	}
}

function Form (props){
	const [alert, openAlert] = React.useState(false)


  function handleChange(buttonName){
	if(buttonName === "Fechar"){
		props.event(false)
	}  
	else if(buttonName === "Marcar")
	{
		
	}
	else if(buttonName === "Criar")
	{
		openAlert(true)
		markEnabled = !markEnabled
	}

  }
  function handleResponse(value) {
		
		
  }


  return (
    <>
	{alert && <Alerta textoCaixa="Você tem certeza que deseja marcar este evento neste local?" 
	tituloCaixa="Verifique"
	response={handleResponse}
	evento={openAlert}/>}

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
        <Button type="submit" class="buttonCriar"  onClick={()=>handleChange("Criar")}>CRIAR</Button>
        <Button class="buttonFechar" onClick={()=>handleChange("Fechar")}>FECHAR</Button>
      </div>    

		</form>
    
	</Slide>
	</>
  )
}
  

export default Form
export {addMarker}