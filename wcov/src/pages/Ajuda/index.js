import React from 'react'
import Header from '../../components/Header'

import './style.css'

const url1 = 'https://sistemas.df.gov.br/mteste/'
const url2 = 'http://www.saude.df.gov.br/esquema-de-atendimento-no-drive-thru/'

function Ajuda(){

  return (
  <>
    <Header/>
    <div className="containerHelp" >
      <p> A Secretaria de Estado de Saúde do Distrito Federal - SES está disponibilizando o serviço de drive-thru para a população realizar o teste rápido de Covid-19. Tudo pode ser feito sem sair do carro, de forma segura. Para fazer o teste é necessário marcar o atendimento. Diariamente são disponibilizado um número limitado de testes, recomendamos que quem precise faça o cadastro logo pela manhã.</p>
      <a className="link-button" href={url1} rel="noopener noreferrer" target="_blank" >Agendar testes via DRIVE THRU</a>
      <p> Para mais informações sobre os testes, e instruções de cadasto e agendamento, acesse o site:</p>
      <a className="link-button" href={url2} rel="noopener noreferrer" target="_blank" >Instruções para atendimento via DRIVE THRU</a>
    </div>

    

  </>
  )
}

export default Ajuda