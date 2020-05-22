import React from 'react';
import Draggable from 'react-draggable';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Farmacia from '../../assets/Mapa/Farmacia.svg'
import Hospital from '../../assets/Mapa/Hospital.svg'
import UPA from '../../assets/Mapa/UPA.svg'
import Eventos from '../../assets/Mapa/Eventos.svg'
import './style.css'

//#TODO: limitar movimento para abaixo do mapa

function FloatingFilter(props){

    const [state, setState] = React.useState({
        farmaciaShow: false,
        hospitalShow: true,
        UPAShow: true,
        eventosShow: true,
    });


    const handleChange = (event) => {
        var submit = {...state, [event.target.name]: event.target.checked}
        setState({ ...state, [event.target.name]: event.target.checked });
        props.response(submit);     
    };


    return (
    <>  
        <Draggable bounds="body">
            <div className="containerFilter">
                <div>
                    <h1 className='titleFilter' >Mostrar</h1>
                </div>

                <div className="containerCheckboxes">
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" >
                            <div className="containerCheckboxes">

                                <FormControlLabel
                                control={<Checkbox  name="farmaciaShow" onChange={handleChange} checked={state.farmaciaShow}/>}
                                label="Farmácias"
                                labelPlacement="end"
                                />
                                    
                                <img src={Farmacia} className="iconFarmacia" alt="Farmacia" />   
                            </div>

                            <div className="containerCheckboxes">
                                <FormControlLabel
                                control={<Checkbox  name="hospitalShow" onChange={handleChange} checked={state.hospitalShow} />}
                                label="Hospitais"
                                labelPlacement="end"
                                />
                                     
                                <img src={Hospital} className="iconHospital" alt="Hospital"/>
                            </div>

                            <div className="containerCheckboxes">
                                <FormControlLabel
                                control={<Checkbox  name="UPAShow" onChange={handleChange} checked={state.UPAShow} />}
                                label="UPAs"
                                labelPlacement="end"
                                />
                            
                                <img src={UPA}  className="iconUPA" alt="UPA" />
                            </div>

                            <div className="containerCheckboxes">
                                <FormControlLabel
                                control={<Checkbox  name="eventosShow" onChange={handleChange} checked={state.eventosShow} />}
                                label="Ocorrências"
                                labelPlacement="end"
                                />
                                
                                <img src={Eventos}   className="iconEventos" alt="Eventos" />
                                
                            </div>
                        </FormGroup>
                    </FormControl>
                </div>
            </div>
        </Draggable>
    </>
    )
    
}

export default FloatingFilter