import React from 'react'
import { Divider } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import './style.css'

//#TODO: incluir likes e dislikes

function CardInfo ({cardType, titleCard, descriptionCard}){

  function DisplayName(titleCard){
    switch(titleCard) {
      case 'mascara':
        return "Distribuição de máscaras"
      case 'cesta':
        return "Distribuição de cestas básicas"
      case 'outro':
        return "Outro"
      default:
        return titleCard
  
    }
  }

  function DisplayDescription(cardType){
    if (cardType === "event" || cardType === "mascara" || cardType === "cesta" || cardType === "outro") {
      return "Descrição: "
    }
    else {
      return "Endereço: "
    }
  }

  return (
        <>
          <div >
            <h1 className= "titleCardInfo" >
              {DisplayName(titleCard)}
            </h1>
            <Divider />
            <p className="textCardInfo" >
              <strong> {DisplayDescription(cardType)} </strong>
              {descriptionCard}
            </p>

          </div>
        </>
  )
}

export default CardInfo;