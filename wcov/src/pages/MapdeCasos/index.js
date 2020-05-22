import React from 'react'

import Header from '../../components/Header'
import ChartPie from '../../components/Chart/ChartPie'
import ChartBar from '../../components/Chart/ChartBar'
// import ChartComposed from '../../components/Chart/ChartComposed'
import Homem from '../../assets/Casos/Homem.svg'
import Mulher from '../../assets/Casos/Mulher.svg'
import CasosService from '../../services/CasosService'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './style.css'


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
    if(newState.some(newState => newState.RA === caso.regiao)) {
    } else {
      newState.push(
        {
          RA: caso.regiao,
          obitos: 0,
          recuperados: 0,
          totais: 0,
          graves: 0,
          moderados: 0,
          leves: 0})
          
        }
      var index = newState.findIndex(newState => newState.RA === caso.regiao)
      
      switch (caso.estado) {
        case "Óbito":
          newState[index].obitos++
          break
        case "Recuperado":
          newState[index].recuperados++
          break
        case "Grave":
          newState[index].graves++
          break
        case "Moderado":
          newState[index].moderados++
          break
        case "Leve":
          newState[index].leves++
          break
        default:
      }
      newState[index].totais++
  })
  return newState
}

function Mapeamento() {
  const casosMan = new CasosService()
  const [numbRA, setNumbRA] = React.useState([])
  const [casos, setCasos] = React.useState([])
  const [percent, setPercent] = React.useState({
    mal: 0,
    fem: 0
  })

	React.useEffect(() => {
    var dum
		async function fetchCasos() {
			  await casosMan.get('casos').then(async (response) =>{
        await setCasos(response)
        dum = response
      })
      
      setPercent(getPercentages(dum))
      setNumbRA(getNumber(dum))
    }
    fetchCasos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

  return (
    <>
      <Header />

      <div className="containerCasos" >
        <div className="containerRegião">
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
                
                {numbRA.map(function (numbra) { 
                  if(numbra.RA !== "") {
                    return(<TableRow key={numbra.RA}>
                    <TableCell component="th" scope="row">
                      {numbra.RA}
                    </TableCell>
                    <TableCell align="center">{numbra.obitos}</TableCell>
                    <TableCell align="center">{numbra.recuperados}</TableCell>
                    <TableCell align="center">{numbra.totais}</TableCell>
                  </TableRow>)
                  }
                  return null
                })}
              </TableBody>
            </Table>
          </TableContainer>

        </div>


        <div className="containerTotais" >

          <h1><strong>Casos</strong></h1>

          <div className="containerChartPie">
            <ChartPie listaCasos={numbRA} totNum={casos.length}/>
          </div>
          
          <hr />

          <div className="containerChartBar" >
            <strong>{percent.mal}%</strong>
            <img src={Homem}  alt="Homem"/>
            <hr />
            <img src={Mulher} alt="Mulher" />
            <strong>{percent.fem}%</strong>

          </div>
          <div  >
            <ChartBar listaCasos={casos} totNum={casos.length}/>
          </div>

        </div>

      </div>
    </>
  )
}

export default Mapeamento

