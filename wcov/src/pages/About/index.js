import React from 'react'

import Header from '../../components/Header'
import './style.css'
import Logo from '../../assets/Logos/Logo.svg'
import LogoTransparente from '../../assets/Logos/LogoTransparente.svg'
import logoHackathon from '../../assets/Logos/logoHackathon.svg'
import André from '../../assets/Participantes/André.svg'
import Baliza from '../../assets/Participantes/Baliza.svg'
import Bianca from '../../assets/Participantes/Bianca.svg'
import Bismarck from '../../assets/Participantes/Bismarck.svg'
import Caio from '../../assets/Participantes/Caio.svg'
import Delolmo from '../../assets/Participantes/Delolmo.svg'
import Evelyn from '../../assets/Participantes/Evelyn.svg'
import Maria from '../../assets/Participantes/Maria Claudia.svg'
import Paulo from '../../assets/Participantes/Paulo.svg'


function About(){ 

  return (
  <>
    <Header/>
        
    <div class = "containerAAbout">
        
        <h1 class="titleAAbout"> Sobre </h1>
        <img class = "imgBackT" src={LogoTransparente} alt="LogoT" />
        <img class = "imgBack" src={Logo} alt="Logo" />
        <p class="textAAbout"> Essa aplicação foi desenvolvida pelos alunos do 6º semestre de Engenharia Mecatrônica da Universidade de Brasília, como uma solução para o Desafio 1 (Informação e Saúde) da maratona de programação “Hackathon UnB-FGA 2020”. Nessa maratona, várias equipes deveriam desenvolver ferramentas, utilizando programação e design, com objetivo de suprir as necessidades criadas pela COVID-19 na população do Distrito Federal.</p>
        <p class="textAAboutParticipantes"> Participantes:</p>

        <div class = "containerParticipantes" >
        
          <div>
            <img src={André} alt="André" />
            <p class="textAAboutParticipantes"> André Dornelas</p>
          </div>

          <div>
            <img src={Bianca} alt="Bianca" />
            <p class="textAAboutParticipantes"> Bianca Boueri</p>
          </div>

          <div>
            <img src={Caio} alt="Caio" />
            <p class="textAAboutParticipantes"> Caio Alessandri</p>
          </div>

          <div>
            <img src={Evelyn} alt="Evelyn" />
            <p class="textAAboutParticipantes"> Evelyn Soares</p>
          </div>

          <div>
            <img src={Baliza} alt="Baliza" />
            <p class="textAAboutParticipantes"> Gabriel Baliza</p>
          </div>

        </div>


        <div class = "containerParticipantes" >

          <div>
            <img src={Bismarck} alt="Bismarck" />
            <p class="textAAboutParticipantes"> Gabriel Bismarck</p>
          </div>

          <div>
            <img src={Delolmo} alt="Delolmo" />
            <p class="textAAboutParticipantes"> Gabriel Delolmo</p>
          </div>

          <div>
            <img src={Maria} alt="Maria" />
            <p class="textAAboutParticipantes"> Maria Claudia</p>
          </div>

          <div>
            <img src={Paulo} alt="Paulo" />
            <p class="textAAboutParticipantes"> Paulo Henrique</p>
          </div>
          
        </div>

        <img class = "imgBackH" src={logoHackathon} alt="logoHackathon" />
        
    </div>

  </>
  )
}

export default About