import React from 'react'
import {Slide, Input} from "@material-ui/core"
import { Button, Card, CardContent, CardActions } from '@material-ui/core'

import useStyles from './styles'

function Form (props){

  const classes = useStyles()
  
  function handleChange(){
    props.event(false)
  }

  return (

    <div  >
    
    <Slide direction="left" mountOnEnter unmountOnExit className={classes.root} in={props.display} >
        <Card>
          
            <CardContent>
            <form>
              <label>
                Título:
                <input/>
              </label>

              <label>
                Descrição:
                <textarea />
              </label>
            </form>

            </CardContent>
            <CardActions>
              <Button type="submit" >
                Salvar
              </Button>
              <Button onClick={handleChange} >
                Fechar
              </Button>

            </CardActions>
        </Card>

      </Slide>
    </div>
  )
}

export default Form
