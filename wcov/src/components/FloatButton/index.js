import React from 'react'
import { Fab} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add'

import './style.css'

const styles = {
  root: {
    height: '70px',
    width: '70px',
    backgroundColor: '#E91E63',
    boxShadow: '#FFFFFF',
    '&:active': {
      boxShadow: '#FFFFFF',
    },
    '&:hover': {
      backgroundColor: '#E57A9E',
      '@media (hover: none)': {
        backgroundColor: '#E91E63',
      },
    },
    color: '#FFFFFF'
  },
};

function FloatButton(props){
  const { classes } = props;
  return (
    <div className="floatButtonContainer" >
      <Fab aria-label="menu" classes={{root: classes.root}}>
        <AddIcon /> 
      </Fab>
    </div>
  )
}

export default withStyles(styles)(FloatButton);