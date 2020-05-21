import React from 'react'
import Header from '../../components/Header'
import './style.css'

function About (){



  return (
  <>
    <Header/>
      <div className = "containerAbout">
        <h1 className="titleAbout"> Sobre </h1>
        <p className="textAbout"> Aplicação desenvolvida por alunos de graduação da Universidade de Brasília para o Hackathon UnB-FGA 2020, com o obetivo de auxíliar no combate ao COVID-19 trazendo informação para a população.</p>
      </div>
  </>
  )
}

export default About