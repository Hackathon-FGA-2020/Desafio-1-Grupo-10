import React from 'react'
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from '@material-ui/lab'
import { withStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import Form from '../Form'

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
];

function FloatButton(props){
  
  const [openOp, setOpenOp] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);

  const openDial = () => {
    setOpenForm(!openForm);
    //setOpenOp(!openOp);
  }

  const handleOptions = (optionName) => {
    if(optionName === 'Edit') {
      //reverseEnabler();
      setOpenForm(true)
    }
  };

  return (
  <>
   <Form display={openForm} event={setOpenForm}/>
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
  </>
  )
}

export default withStyles(styles)(FloatButton);