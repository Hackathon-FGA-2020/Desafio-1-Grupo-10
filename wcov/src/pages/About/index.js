import React from 'react'

import Header from '../../components/Header'
import './style.css'
import Logo from '../../assets/logos/Logo.svg'
import LogoTransparente from '../../assets/logos/LogoTransparente.svg'
import logoHackathon from '../../assets/logos/logoHackathon.svg'
import André from '../../assets/participantes/André.svg'
import Baliza from '../../assets/participantes/Baliza.svg'
import Bianca from '../../assets/participantes/Bianca.svg'
import Bismarck from '../../assets/participantes/Bismarck.svg'
import Caio from '../../assets/participantes/Caio.svg'
import Delolmo from '../../assets/participantes/Delolmo.svg'
import Evelyn from '../../assets/participantes/Evelyn.svg'
import Maria from '../../assets/participantes/Maria Claudia.svg'
import Paulo from '../../assets/participantes/Paulo.svg'


<<<<<<< HEAD
function About (){ 



  return (
=======
function About (){
 return (
>>>>>>> bad7df04ae9fb9d1d58bec3743cd1022821ca3f8
  <>
    <Header/>
        
    <div class = "containerAAbout">
        
        
        <h1 class="titleAAbout"> Sobre </h1>
        
       
        <img class = "imgBackT" src={LogoTransparente} alt="LogoT" />
        <img class = "imgBack" src={Logo} alt="Logo" />

       

        <p class="textAAbout"> Essa aplicação foi desenvolvida pelos alunos do 6º semestre de Engenharia Mecatrônica da Universidade de Brasília, como uma solução para o Desafio 1 (Informação e Saúde) da maratona de programação “Hackathon UnB-FGA 2020”. Nessa maratona, várias equipes deveriam desenvolver um conjunto de soluções para os desafios propostos, usando programação e design.</p>
        
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

        <img src={logoHackathon} alt="logoHackathon" />

        
    </div>

    

  </>
  )
}

export default About