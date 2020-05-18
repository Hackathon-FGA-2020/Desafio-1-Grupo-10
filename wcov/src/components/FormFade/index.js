import React, { useState } from 'react'
import Fade from "@material-ui/core/Fade"
import { Button, Card, CardActionArea, CardContent, CardActions } from '@material-ui/core'

import useStyles from './styles'

function FormFade (){

  const classes = useStyles()
  const [checked, setChecked] = useState(true)

  function handleChange(){
    setChecked((prev) => !prev)
  }

  return (

    <div  >

    <Fade className={classes.root} in={checked} >
        <Card>
          
            <CardContent>

            </CardContent>

            <CardActions>
              <Button onClick={handleChange} >
                Salvar
              </Button>
              <Button onClick={handleChange} >
                Fechar
              </Button>

            </CardActions>
        </Card>

      </Fade>
    </div>
  )
}

export default FormFade
