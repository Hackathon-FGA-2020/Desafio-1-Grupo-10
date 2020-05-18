import React from 'react'
import Header from '../../components/Header'
import Button from '@material-ui/core/Button'

import './style.css'

const url1 = 'https://sistemas.df.gov.br/mteste/'
const url2 = 'http://www.saude.df.gov.br/esquema-de-atendimento-no-drive-thru/'

function Ajuda(){

  return (
  <>
    <Header/>
    <div className="containerHelp" >
      <a className="link-button" href={url1} target="_blank" >Agendar testes via DRIVE THRU</a>

      <a className="link-button" href={url2} target="_blank" >Instruções para atendimento via DRIVE THRU</a>
    </div>

  </>
  )
}
export default Ajuda