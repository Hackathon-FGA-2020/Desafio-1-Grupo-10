import React from 'react';
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core'
//import {AlertContext} from '../Form'

export default function Alerta(props) {
	const [open, setOpen] = React.useState(true)

	function handleOptions(optionName){
		if(optionName === "cancel"){
			setOpen(false)
			props.response(false)
			
		}
		else if(optionName === "confirm"){
			setOpen(false)
			props.response(true)
		}
		props.evento(false)
	}
	
	return(
		<div>
			<Dialog
				open={open}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
			<DialogTitle id="alert-dialog-title" children={props.tituloCaixa} />
			<DialogContent>
				<DialogContentText id="alert-dialog-description" children={props.textoCaixa} />
			</DialogContent>
				<DialogActions >
				<Button onClick={() => handleOptions('cancel')} color="primary" className="buttonCancelar">
					Cancelar
				</Button>
				<Button onClick={() => handleOptions('confirm')} color="primary" autoFocus className="buttonConfirmar">
					Confirmar
				</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}