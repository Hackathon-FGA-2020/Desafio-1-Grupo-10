import React from 'react'
import get from '../../api/request'
import Header from '../../components/Header'
import ChartPie from '../../components/ChartPie'
import CharBar from '../../components/ChartBar'

import './style.css'

function Mapeamento (){

 

  return (
    <>
    {console.log(get())}
      <Header/>
      
      

      <div className="containerCasos" >


          <div className="containerMapa" >

          </div>



          <div className="containerEvolucao" >

          <CharBar />

          </div>

        
        
        <div className="containerDados" >

            <div className="total" >

              <ChartPie />

            </div>
            
            <div className="trackCasos" >

              <ChartPie />

            </div>

        </div>


      </div>
    
    </>
    )
  }

export default Mapeamento