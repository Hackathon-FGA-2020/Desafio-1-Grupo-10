import React from 'react';
import Draggable from 'react-draggable';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './style.css'

function FloatingFilter(){

    return (
    <>
        <Draggable>
            <div className="containerFilter">
                <div>
                    <h1 className='titleFilter' >Mostrar</h1>
                </div>


                <div>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <div>
                                <FormControlLabel
                                value="top"
                                control={<Checkbox color="primary" />}
                                label="Nome"
                                labelPlacement="end"
                                />
                                
                            </div>
                            
                            <FormControlLabel
                            value="start1"
                            control={<Checkbox color="primary" />}
                            label="Nome2"
                            labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </div>
                
                <div>
                </div>
                
                <div>
                </div>
            </div>
        </Draggable>
    </>
    )
}

export default FloatingFilter