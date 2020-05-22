import React from 'react'

<<<<<<< HEAD
=======
import ProgressBar from 'react-bootstrap/ProgressBar'
import CasosService from '../../services/CasosService'
>>>>>>> bad7df04ae9fb9d1d58bec3743cd1022821ca3f8
import Header from '../../components/Header'
// import ChartPie from '../../components/ChartPie'
// import ChartBar from '../../components/ChartBar'
// import ChartComposed from '../../components/ChartComposed'
// import homem from '../../assets/casos/homem.svg'
// import mulher from '../../assets/casos/mulher.svg'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './style.css'


<<<<<<< HEAD
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),

];

=======
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
>>>>>>> bad7df04ae9fb9d1d58bec3743cd1022821ca3f8

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
<<<<<<< HEAD
      
      <div className="containerCasos" >
=======
      <div className="containerCasos" >

            <div style={{ width: 400 }} >
              
             <ProgressBar now={50} />
          
          </div>



          <div className="containerEvolucao" >

          <ChartComposed listaCasos={casos}/>

          </div>

>>>>>>> bad7df04ae9fb9d1d58bec3743cd1022821ca3f8
        
        
        <div className="containerRegião" > 

          <h1>Casos por Região</h1>
          <TableContainer className="containerTable" component={Paper}>
              <Table stickyHeader aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Região</TableCell>
                    <TableCell align="center">Número de Casos</TableCell>
                    <TableCell align="center">Taxa de Crescimento</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody className="containerTableBody" >
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.fat}</TableCell>
                      <TableCell align="center">{row.carbs}</TableCell>
                  
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>

<<<<<<< HEAD
        </div>
=======
            <div className="total" >
              
              <p class="chartPieTitle"> Casos</p>
              <p class="totalDeCasos"> {casos.length}</p>
              <ChartPie listaCasos={casos}/>
              
            </div>

            <div className="conteinerHomemEMulher">

              <div className="conteinerHuman">
                
                <img src={homem} alt="Homem" />
                <p class="totalDeCasos"> {percent.mal}%</p>
>>>>>>> bad7df04ae9fb9d1d58bec3743cd1022821ca3f8


<<<<<<< HEAD
          <div className="containerTotais" >
=======
              <div className="conteinerHuman">
                <div class="conteinerImagemMulher">
                  <img src={mulher} alt="Mulher" /> 
                </div>                  
                
                <p class="totalDeCasos"> {percent.fem}%</p>
>>>>>>> bad7df04ae9fb9d1d58bec3743cd1022821ca3f8

            <h1>Casos: 5271 </h1>

            

<<<<<<< HEAD
            <div className="containerChartPie" >
=======
            <ChartBar listaCasos={casos}/>
>>>>>>> bad7df04ae9fb9d1d58bec3743cd1022821ca3f8

            </div>


            <div className="containerChartBar" >

            </div>

          </div>
    
        </div>
    </>
    )
  }

export default Mapeamento

