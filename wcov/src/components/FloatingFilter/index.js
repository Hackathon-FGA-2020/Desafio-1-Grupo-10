import React from 'react';
import Draggable from 'react-draggable';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Farmacia from '../../assets/Farmacia.png'
import Hospital from '../../assets/Hospital.png'
import UPA from '../../assets/UPA.png'
import './style.css'

//#TODO: limitar movimento para abaixo do mapa

function FloatingFilter(props){

    const [state, setState] = React.useState({
        farmaciaShow: false,
        hospitalShow: false,
        UPAShow: false,
        eventosShow: false,
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
                                control={<Checkbox  name="farmaciaShow" onChange={handleChange}/>}
                                label="Farmácias"
                                labelPlacement="end"
                                />
                                    
                                <img src={Farmacia} className="iconFarmacia" alt="Farmacia" />   
                            </div>

                            <div className="containerCheckboxes">
                                <FormControlLabel
                                control={<Checkbox  name="hospitalShow" onChange={handleChange}/>}
                                label="Hospitais"
                                labelPlacement="end"
                                />
                                     
                                <img src={Hospital} className="iconHospital" alt="Hospital" />
                            </div>

                            <div className="containerCheckboxes">
                                <FormControlLabel
                                control={<Checkbox  name="UPAShow" onChange={handleChange}/>}
                                label="UPAs"
                                labelPlacement="end"
                                />
                            
                            <img src={UPA}  className="iconUPA" alt="UPA" />
                            </div>

                            <div>
                                <FormControlLabel
                                control={<Checkbox  name="eventosShow" onChange={handleChange}/>}
                                label="Eventos"
                                labelPlacement="end"
                                />
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