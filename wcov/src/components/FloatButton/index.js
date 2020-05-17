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
  const [anchorOpt, setAnchorOpt] = React.useState(null);

  const handleOptions = (event) => {
    setAnchorOpt(event.currentTarget);
  };

  const closeOptions = () => {
    setAnchorOpt(null);
  };

  return (
    <div className="floatButtonContainer" >
	  <div className="miniFloatContainer" style={{bottom: "20px"}}>
	    <Fab classes={{root: classes.root}} style={{width: "60px", height: "60px"}}>
	    </Fab>
	  </div>
	  <div className="miniFloatContainer" >
	    <Fab classes={{root: classes.root}} style={{width: "60px", height: "60px"}}>
	    </Fab>
	  </div>
	  <div>
      <Fab aria-label="menu" classes={{root: classes.root}} onClick={handleOptions}>
       <AddIcon /> 
      </Fab>
	  </div>
    </div>
  )
}

export default withStyles(styles)(FloatButton);