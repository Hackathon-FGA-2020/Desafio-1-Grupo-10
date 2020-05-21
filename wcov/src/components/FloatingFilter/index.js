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


const primaryColor = {
    color:"#E91E63"
}

function FloatingFilter(){

    return (
    <>  
        <Draggable>
            <div className="containerFilter">
                <div>
                    <h1 className='titleFilter' >Mostrar</h1>
                </div>

                <div className="containerCheckboxes">
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" >
                            <div className="containerCheckboxes">

                                <FormControlLabel
                                value="farmaciaShow"
                                control={<Checkbox />}
                                label="Farmácias"
                                labelPlacement="end"
                                />
                                    
                                <img src={Farmacia} className="iconFarmacia" alt="Farmacia" />   
                            </div>

                            <div className="containerCheckboxes">
                                <FormControlLabel
                                value="hospitalShow"
                                control={<Checkbox />}
                                label="Hospitais"
                                labelPlacement="end"
                                />
                                     
                                <img src={Hospital} className="iconHospital" alt="Hospital" />
                            </div>

                            <div className="containerCheckboxes">
                                <FormControlLabel
                                value="UPAShow"
                                control={<Checkbox />}
                                label="UPAs"
                                labelPlacement="end"
                                />
                            
                            <img src={UPA}  className="iconUPA" alt="UPA" />
                            </div>

                            <div>
                                <FormControlLabel
                                value="eventosShow"
                                control={<Checkbox  />}
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