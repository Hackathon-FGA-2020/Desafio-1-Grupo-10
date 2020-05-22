import React from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar'
import CasosService from '../../services/CasosService'
import Header from '../../components/Header'
import ChartPie from '../../components/ChartPie'
import ChartBar from '../../components/ChartBar'
import ChartComposed from '../../components/ChartComposed'
import homem from '../../assets/casos/homem.svg'
import mulher from '../../assets/casos/mulher.svg'

import './style.css'


function getPercentages(casos) {
	var homem=0
	var mulher = 0
	casos.forEach((caso) => {
		(caso.sexo === 'Masculino') ? homem++ : mulher++
	})
	for(let caso in casos) {
			}
	homem /= (casos.length/100)
	mulher /= (casos.length/100)
	return {
		mal: homem.toFixed(2), 
		fem: mulher.toFixed(2)}
}

function Mapeamento (){
	const casosMan = new CasosService()
	const [casos, setCasos] = React.useState([])
	const [percent, setPercent] = React.useState( {
		mal: 0,
		fem: 0})
	
	React.useEffect(() => {
		async function fetchCasos() {
			var dum
			await casosMan.get('casos').then((response) =>{
				setCasos(response)
				dum = response
			})
			setPercent(getPercentages(dum))
		}
		fetchCasos()
	},[])

  return (
    <>
      <Header/>
      <div className="containerCasos" >

            <div style={{ width: 400 }} >
              
             <ProgressBar now={50} />
          
          </div>



          <div className="containerEvolucao" >

          <ChartComposed listaCasos={casos}/>

          </div>

        
        
        <div className="containerDados" >
            

            <div className="total" >
              
              <p class="chartPieTitle"> Casos</p>
              <p class="totalDeCasos"> {casos.length}</p>
              <ChartPie listaCasos={casos}/>
              
            </div>

            <div className="conteinerHomemEMulher">

              <div className="conteinerHuman">
                
                <img src={homem} alt="Homem" />
                <p class="totalDeCasos"> {percent.mal}%</p>

              </div>

              <div className="conteinerHuman">
                <div class="conteinerImagemMulher">
                  <img src={mulher} alt="Mulher" /> 
                </div>                  
                
                <p class="totalDeCasos"> {percent.fem}%</p>

              </div>

            </div>
          
            
            <div className="trackCasos" >

            <ChartBar listaCasos={casos}/>

            </div>

        </div>


      </div>
    
    </>
    )
  }

export default Mapeamento


