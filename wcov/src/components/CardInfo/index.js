import React from 'react'
import { Divider } from '@material-ui/core'
import './style.css'

//#TODO: Descrição ao invés de endereço no caso de defaultmarkers, incluir likes e dislikes

function CardInfo ({cardType, titleCard, descriptionCard}){

  function DisplayName(titleCard){
    switch(titleCard) {
      case 'pharm':
        console.log("Farmácia")
        return "Farmácia"
      case 'hosp':
        console.log("Hospital")
        return "Hospital"
      case 'upa':
        console.log("UPA - Unidade de Pronto Atendimento")
        return "UPA - Unidade de Pronto Atendimento"
      case 'mascara':
        console.log("Distribuição de máscaras")
        break;
      default:
        console.log(titleCard)
  
    }
  }

  function DisplayDescription(cardType){
    if (cardType === "event" || cardType === "mascara") {
      return "Descrição"
    }
    else {
      return "Endereço"
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
              <strong>{DisplayDescription(cardType)}  </strong>
              {descriptionCard}
            </p>
          </div>
        </>
  )
}

export default CardInfo;