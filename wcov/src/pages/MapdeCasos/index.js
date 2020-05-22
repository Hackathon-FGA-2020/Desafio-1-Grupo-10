import React from 'react'

import Header from '../../components/Header'
import ChartPie from '../../components/Chart/ChartPie'
import ChartBar from '../../components/Chart/ChartBar'
// import ChartComposed from '../../components/Chart/ChartComposed'
import homem from '../../assets/Casos/homem.svg'
import mulher from '../../assets/Casos/mulher.svg'
import CasosService from '../../services/CasosService'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './style.css'


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

function getPercentages(casos) {
  var homem = 0
  var mulher = 0
  casos.forEach((caso) => {
    (caso.sexo === 'Masculino') ? homem++ : mulher++
  })
  homem /= (casos.length / 100)
  mulher /= (casos.length / 100)
  return {
    mal: homem.toFixed(2),
    fem: mulher.toFixed(2)
  }
}

function getNumber(casos) {
  var newState = []
  casos.forEach((caso) => {
    console.log(caso.regiao)
    /*if(newState.some(newState => newState.RA === caso.regiao)) {
    } else {
      console.log(caso.regiao)
      newState.push(
        {
          RA: caso.regiao,
          obitos: 0,
          recuperados: 0,
          totais: 0,
          grave: 0,
          moderados: 0,
          leves: 0})
          
        }
      //var index = newState.findIndex(newState => newState.RA === caso.regiao)
      //newState[index][caso.state]++
      //console.log(caso)
      */
    })
    
}


function Mapeamento() {
  const casosMan = new CasosService()
  const [casos, setCasos] = React.useState([])
  const [percent, setPercent] = React.useState({
    mal: 0,
    fem: 0
  })

	React.useEffect(() => {
		async function fetchCasos() {
			var dum
			await casosMan.get('casos').then((response) =>{
				setCasos(response)
				dum = response
			})
      setPercent(getPercentages(dum))
      getNumber(casos)
		}
    fetchCasos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

  return (
    <>
      <Header />

      <div className="containerCasos" >


        <div className="containerRegião" >

          <h1>Casos por Região</h1>
          <TableContainer className="containerTable" component={Paper}>
            <Table stickyHeader aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Região</TableCell>
                  <TableCell align="center">Óbitos</TableCell>
                  <TableCell align="center">Recuperados</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>

              <TableBody >
                {casos.map((caso) => (
                  <TableRow key={caso.regiao}>
                    <TableCell component="th" scope="row">
                      {caso.regiao}
                    </TableCell>
                    <TableCell align="center">{caso.estado}</TableCell>
                    <TableCell align="center">{caso.estado}</TableCell>
                    <TableCell align="center">{caso.estado}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </div>


        <div className="containerTotais" >

          <h1><strong>Casos</strong></h1>
          {casos.length}



          <div className="containerChartPie" >
            <ChartPie listaCasos={casos}/>
          </div>


          <div className="containerChartBar" >
            <strong>Nº</strong>
            <img src={homem}  alt="Homem"/>
            <img src={mulher} alt="Mulher" />
            <strong>Nº</strong>

          </div>
          <div  >
            <ChartBar listaCasos={casos}/>
          </div>

        </div>

      </div>
    </>
  )
}

export default Mapeamento

