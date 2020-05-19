import React from 'react'
import Header from '../../components/Header'
import help from '../../assets/ajuda/help.svg'
import './style.css'

const agendar = 'https://sistemas.df.gov.br/mteste/'
const instrucoes = 'http://www.saude.df.gov.br/esquema-de-atendimento-no-drive-thru/'

function Ajuda(){

  return (
  <>
    <Header/>

    <div className="containerHelp" >
      <div >

      <h1 className="titleHelp" >Precisa de ajuda?</h1>

        <p className="textHelp" > A Secretaria de Estado de Saúde do Distrito Federal - SES está disponibilizando o serviço de drive-thru 
          para a população realizar o teste rápido de Covid-19. Tudo pode ser feito sem sair do carro, de forma segura.
          Para fazer o teste é necessário marcar o atendimento, diariamente são disponibilizado um número limitado de testes.
        </p>
        <p className="textHelp" >Para mais informações sobre os testes, instruções de cadasto e agendamento, acesse os sites:
        </p>
      <div className="containerButtonHelp" >
        <a href={agendar} target="_blanck" className="buttonHelp" >Instruções</a>
        <a href={instrucoes} className="buttonHelp" >Agendar Teste</a>
      </div>
      </div>

      
      <div>
          <img src={help} />
      </div>

    </div>
  </>
  )
}

export default Ajuda