import React from 'react'
import { Divider } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import './style.css'

function CardInfo(props){

  function displayName(){
    switch(props.name) {
      case 'mascara':
        return "Distribuição de máscaras"
      case 'cesta':
        return "Distribuição de cestas básicas"
      case 'outro':
        return "Outro"
      default:
        return props.name
  
    }
  }
 
  function displayDescription(){
    if (props.icon === "event" || props.icon === "mascara" || props.icon === "cesta" || props.icon === "outro") {
      return "Descrição: "
    }
    else {
      return "Endereço: "
    }
  }

  const [state, setState] = React.useState({
    like: false,
    dislike: false,
  });

  const handleChange = (event) => {
    var submit = {...state, [event.target.name]: event.target.checked}
    setState({ ...state, [event.target.name]: event.target.checked });
    props.response(submit);
  };

  function displayLikes(){
    if (props.icon === "event" || props.icon === "mascara" || props.icon === "cesta" || props.icon === "outro") {
      return(
        <FormControl component="fieldset" >
          <FormGroup aria-label="position" >
            <FormControlLabel
              control={
                <Checkbox 
                  name="like"
                  onChange={handleChange}
                  checked={state.like}
                  icon={<ThumbUpOutlinedIcon />}
                  checkedIcon={<ThumbUpIcon />}
                />
              }
              disabled ={state.dislike}
              label={convertLikes()}
              className="textCardInfo"
              labelPlacement="end"
            />

            <FormControlLabel
              control={
                <Checkbox 
                  name="dislike"
                  onChange={handleChange}
                  checked={state.dislike}
                  icon={<ThumbDownOutlinedIcon />}
                  checkedIcon={<ThumbDownIcon />}
                />
              }
              disabled ={state.like}
              label={convertDislikes()}
              className="textCardInfo"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      )
    }
  }

  function convertLikes(){
    if ((props.likes === 1 && state.like === false) || (props.likes === 0 && state.like === true)){
      return `1 pessoa confirmou`
    }
    else{
      if (state.like === true) {
        return `${props.likes+1} pessoas confirmaram`
      } else {
        return `${props.likes} pessoas confirmaram`
      }
    }
  }

  function convertDislikes(){
    if ((props.dislikes === 1 && state.dislike === false) || (props.dislikes === 0 && state.dislike === true)){
      return `1 pessoa contestou`
    }
    else{
      if (state.dislike === true) {
        return `${props.dislikes+1} pessoas contestaram`
      } else {
        return `${props.dislikes} pessoas contestaram`
      }
    }
  }

  return (
        <>
          <div >
            <h1 className= "titleCardInfo" >
              {displayName()}
            </h1>
            <Divider />
            <p className="textCardInfo" >
              <strong> {displayDescription()} </strong>
              {props.description}
            </p>
            {displayLikes()}
          </div>
        </>
  )
}


export default CardInfo;