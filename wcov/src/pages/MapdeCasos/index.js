import React from 'react'

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


function Mapeamento (){

  return (
    <>
      <Header/>
      
      <div className="containerCasos" >
        
        
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

        </div>


          <div className="containerTotais" >

            <h1>Casos: 5271 </h1>

            

            <div className="containerChartPie" >

            </div>


            <div className="containerChartBar" >

            </div>

          </div>
    
        </div>
    </>
    )
  }

export default Mapeamento

