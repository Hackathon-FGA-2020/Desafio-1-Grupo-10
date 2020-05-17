import React from 'react'
import { Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'


function FloatButton(){

  return (
    <Fab color="primary" aria-label="menu">
      <AddIcon /> 
    </Fab>
  )
}

export default FloatButton