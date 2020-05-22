import React from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar'

import get from '../../api/request'
import Header from '../../components/Header'
import ChartPie from '../../components/ChartPie'
import ChartBar from '../../components/ChartBar'
import ChartComposed from '../../components/ChartComposed'
import homem from '../../assets/casos/homem.svg'
import mulher from '../../assets/casos/mulher.svg'

import './style.css'

var numeroDeCasos = 345678; 
var porcentagemHomens = 54.8;
var porcentagemMulheres = 45.2;

function Mapeamento (){

  return (
    <>
    {console.log(get())}
      <Header/>
      
      
      <div>

             <ProgressBar now={50} /> 
          
      </div>

      <div className="containerCasos" >

            <div>

             <ProgressBar now={50} /> 
          
            </div>



          <div className="containerEvolucao" >

          <ChartComposed />

          </div>

        
        
        <div className="containerDados" >
            

            <div className="total" >
              
              <p class="chartPieTitle"> Casos</p>
              <p class="totalDeCasos"> {numeroDeCasos}</p>
              <ChartPie />
              
            </div>

            <div className="conteinerHomemEMulher">

              <div className="conteinerHuman">
                
                <img src={homem} alt="Homem" />
                <p class="totalDeCasos"> {porcentagemHomens}%</p>

              </div>

              <div className="conteinerHuman">
                <div class="conteinerImagemMulher">
                  <img src={mulher} alt="Mulher" /> 
                </div>                  
                
                <p class="totalDeCasos"> {porcentagemMulheres}%</p>

              </div>

            </div>
          
            
            <div className="trackCasos" >

            <ChartBar />

            </div>

        </div>


      </div>
    
    </>
    )
  }

export default Mapeamento


