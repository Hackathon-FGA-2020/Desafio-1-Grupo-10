import React from 'react'
import Button from '@material-ui/core'
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from '@material-ui/lab'
import { withStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import {reverseEnabler} from '../Map'

import './style.css'

const styles = {
    
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
};

const options = [
  { icon: <EditIcon />, name: 'Edit' },
  { icon: <EditIcon />, name: 'Destroy' },
];

function FloatButton(props){
  const { classes } = props;
  const [openOp, setOpenOp] = React.useState(false);
  //const [hidden, setHidden] = React.useState(false);

  const openDial = () => {
    setOpenOp(!openOp);
  }

  const handleOptions = (optionName) => {
    if(optionName === 'Edit') {
      reverseEnabler();
    }
  };

  return (
    <div className="floatButtonContainer" >
	  <SpeedDial
      ariaLabel="Map Options"
      FabProps={{style: styles}}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      onClick={openDial}
      open={openOp}
    >
      {options.map((option) => (
        <SpeedDialAction
          key={option.name}
          icon={option.icon}
          tooltipTitle={option.name}
          onClick={() => handleOptions(option.name)}
          FabProps={{style: {height:'50px', width:'50px'}}}
        />
      ))}
    </SpeedDial>  
    </div>
  )
}

export default withStyles(styles)(FloatButton);