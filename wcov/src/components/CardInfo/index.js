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

/*
  function displayLikes(cardType){
    if (cardType === "event" || cardType === "mascara" || cardType === "cesta" || cardType === "outro") {
      return 0
    }
  }
*/

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

  function displayLikes(){
    if (props.icon === "event" || props.icon === "mascara" || props.icon === "cesta" || props.icon === "outro") {
      return (
        <FormControl component="fieldset">
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
              label={convertLikes()}
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
              label={convertDislikes()}
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      )
    }
  }

  function convertLikes(){
    if (props.likes === 1){
      return `1 pessoa confirmou`
    }
    else{
      return `${props.likes} pessoas confirmaram`
    }
  }

  function convertDislikes(){
    if (props.likes === 1){
      return `1 pessoa contestou`
    }
    else{
      return `${props.dislikes} pessoas contestaram`
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