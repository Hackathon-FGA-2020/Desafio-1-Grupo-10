import React from 'react'
import Header from '../../components/Header'
import card_02 from '../../assets/Cards_Cuidados/card_02.png'
import card_03 from '../../assets/Cards_Cuidados/card_03.png'
import card_04 from '../../assets/Cards_Cuidados/card_04.png'
import card_05 from '../../assets/Cards_Cuidados/card_05.png'
import card_06 from '../../assets/Cards_Cuidados/card_06.png'
import './style.css'

function Cuidados (){

  return (
  <>
    <Header/>
      <h1 className="title" > Cuidados </h1>
      <img className="card_02" src={card_02} alt='Transmissão: Ela costuma ocorrer pelo ar com secreções contaminadas e/ou por contato pessoal,
      como: beijo, abraço e aperto de mão, contato com objetios e superfícies contaminadas, gotículas de saliva, espirro, catarro, tosse. Atenção!: A transmissão pode ocorrer mesmo
      se a pessoa não apresentar sintomas, então evite contato próxico.
      Imagem da secretaria de Saúde, GDF' />
    
  </>
  )
}

export default Cuidados