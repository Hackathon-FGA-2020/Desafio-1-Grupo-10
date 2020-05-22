import React from 'react'
import Header from '../../components/Header'
import './styles.css'
import Capim from '../../assets/NotFound/Capim.svg'
import Dino from  '../../assets/NotFound/Dino.svg'
import Sun from '../../assets/NotFound/Sun.svg'
import Meteoro from '../../assets/NotFound/Meteoro.svg'

function NotFound(){
  
  return(

    <>
    <Header/>
    <div className="containerNotFound" >
      <h1>Oops! Algo deu errado...</h1>

      <div className="ContainerError" >
      <strong className="ErrorText" >Erro 404</strong>
      <img className="meteoro" src={Meteoro} alt={"Meteoro"}/>
      <img className="sun" src={Sun} alt={"Sol"} />
      <img className="Dino" src={Dino} alt={"Dinossauro"} />
      <img className="Capim" src={Capim} alt={"Chão"} />
      </div>
    </div>
    </>
  )

}

export default NotFound