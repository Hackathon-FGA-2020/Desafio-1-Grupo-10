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
    <div className="containerCuidados" >

          <div className="containderImg" >

            <img className="img" src={card_02} alt='Transmissão: Ela costuma ocorrer pelo ar com secreções contaminadas e/ou por contato pessoal,
            como: beijo, abraço e aperto de mão, contato com objetios e superfícies contaminadas, gotículas de saliva, espirro, catarro, tosse. Atenção!: A transmissão pode ocorrer mesmo
            se a pessoa não apresentar sintomas, então evite contato próxico.
            Imagem da secretaria de saúde, GDF' />

            <img className="img" src={card_03} alt='Como prevenir? Lave as mãos frequentemente com água e sabão por pelo menos 20 segundos.
            Use antisséptico de mãos à base de álcool gel 70%. 
            Cubra o nariz e boca ao espirrar ou tossir. 
            Mantenha os ambientes bem ventilados e limpos. 
            Evite apertos de mão, abraços e beijos. 
            Em eventos abertos recomenda-se a distância mínima de dois metros entre as pessoas. 
            Fique em casa se estiver doente. 
            Não compartilhe objetos pessoais. 
            Evite tocar os olhos, boca ou nariz antes de higienizar as mãos. 
            Imagem da secretaria de saúde, GDF' />

            <img className="img " src={card_04} alt='texto 04' />

            <img className="img" src={card_05} alt='texto 05' />
          </div>
          
          <div>
            <img className="img_6" src={card_06} alt='texto 06' />
          </div>

        </div>
        
  </>
  )
}

export default Cuidados