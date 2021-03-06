import React from 'react'
import {Slide, FormControl} from "@material-ui/core"
import { Button, TextField, InputLabel, Select, MenuItem} from '@material-ui/core'
import Alerta from "../Alert"
import MarkersService from '../../services/MarkersService'
import './style.css'

//#TODO quando marca dois eventos sem atualizar a pagina um substitui o outro

function Form (props){
	const previousCheckRef = React.useRef(props.mydummy)
	const marker = new MarkersService()
	const [alert, openAlert] = React.useState(false)
	const [submitter, setSubmitter] = React.useState(false)
	const [marcarStyle, setMarcarStyle] = React.useState({
		disabled: true,
		style: "buttonMarcarnoMapaDisabled"})
	const [criarStyle, setCriarStyle] = React.useState({
		disabled: true,
		textState: false,
		style: "buttonCriarDisabled"})


  	function handleChange(buttonName) {
		if(buttonName === "Fechar") {
			props.event(false)
		}  
		else if(buttonName === "Marcar") {
			localStorage.setItem('@createConfirm', true)
			handleButtonsCheck()
		}
		else if(buttonName === "Criar") {
			openAlert(true)
		} else {
		if(buttonName===null) {
			setMarcarStyle({
				disabled:true,
				style:"buttonMarcarnoMapaDisabled"})
			setCriarStyle({
				disabled:true,
				textState:false,
				style:"buttonCriarDisabled"})

				localStorage.setItem('@createConfirm', false)
				localStorage.setItem('@mapConfirm', false)
		} else {
			setMarcarStyle({
				disabled:false,
				style:"buttonMarcarnoMapa"})
			handleButtonsCheck()
			switch(buttonName.target.value) {
				case 'mascara':
					localStorage.setItem('@selectValue', "mascara");
					break;
				case 'cesta':
					localStorage.setItem('@selectValue', "cesta");
					break;
				case 'outro':
					localStorage.setItem('@selectValue', "outro");
					break;
				default:
					localStorage.setItem('@selectValue', "event");
			}
		}
		}
	  }
	  
	React.useEffect(() => {
		if(previousCheckRef.current !== props.mydummy) {
			if((localStorage.getItem('@mapConfirm')) === 'true'){
				handleButtonsCheck()
			}
			previousCheckRef.current = props.mydummy
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[props.mydummy])

	function handleSubmit(event) {
		if(submitter === true) {
			props.event(false)
			localStorage.setItem('@createConfirm', false)
			localStorage.setItem('@mapConfirm', false)
			setSubmitter(false)
			marker.post({
				icon: localStorage.getItem('@selectValue'),
				name: localStorage.getItem('@selectValue'),
				description: localStorage.getItem('@formsMessage'),
				coords: JSON.parse(localStorage.getItem('@position')),
				like: 0,
				dislike:0,
				create_at: Date.now(),
			})
			localStorage.setItem('@formsMessage', '')
			
		} else {
			openAlert(true)
			event.preventDefault()
		}
	}

	function handleText(e) {
		if(e.target.value === "") {
			setCriarStyle({
				disabled:true,
				textState:false,
				style:"buttonCriarDisabled"})
		} else {
			setCriarStyle({
				disabled:criarStyle.disabled,
				textState:true,
				style:"buttonCriarDisabled"})
			handleButtonsCheck()
		}
		localStorage.setItem('@formsMessage', e.target.value)
	}

	function handleButtonsCheck() {
		if(criarStyle.textState === true && marcarStyle.disabled === false && localStorage.getItem('@mapConfirm') === 'true' ) {
			setCriarStyle({
				disabled:false,
				textState:true,
				style:"buttonCriar"})
		}
	}

  return (
	<>
	{alert && 
		<Alerta textoCaixa="Você tem certeza que deseja marcar este evento neste local?" 
		tituloCaixa="Verifique"
		response={setSubmitter}
		evento={openAlert}/>}
	{submitter && handleSubmit()}
	
	<Slide  direction="left" mountOnEnter unmountOnExit  className="containerForm" onExited={() => handleChange(null)}  in={props.display}>
		<form onSubmit={handleSubmit} >
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
			<InputLabel id="inital" >Selecione um evento</InputLabel>
			<Select
				labelId="initial"
				id="inital-2"
				className="selectBox"
				onChange={handleChange}
			>
				<MenuItem value={'mascara'}>Distribuição de máscaras</MenuItem>
				<MenuItem value={'cesta'}>Distribuição de cestas básicas</MenuItem>
				<MenuItem value={'outro'}>Outro</MenuItem>
			</Select>
		  </FormControl>
      <div/>
			<TextField
				label="Descrição"
				variant="filled"
				multiline
				rows={4}
				className="descricaoBox"
				onChange={handleText} 
			/>
      </div>

      <div>
		  <Button class={marcarStyle.style} onClick={()=>handleChange("Marcar")} disabled={marcarStyle.disabled}>MARCAR NO MAPA</Button>
      </div>

      <div class="containerButtonForm" >
        <Button  type="submit" class={criarStyle.style} disabled={criarStyle.disabled}>CRIAR</Button>
        <Button class="buttonFechar" onClick={()=>handleChange("Fechar")}>FECHAR</Button>
      </div>    

		</form>
    
	</Slide>
	</>
  )
}
  

export default Form