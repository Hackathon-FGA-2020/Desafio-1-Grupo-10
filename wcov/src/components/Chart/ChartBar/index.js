import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import './styles.css'

export default function Barch({totNum, listaCasos}){

  var data = [
    {name: '<= 19 anos',  Infectados: 0, Obitos: 0},
    {name: '20 a 29 anos', Infectados: 0, Obitos: 0},
    {name: '30 a 39 anos', Infectados: 0, Obitos: 0},
    {name: '40 a 49 anos', Infectados: 0, Obitos: 0},
    {name: '50 a 59 anos', Infectados: 0, Obitos: 0},
    {name: '>= 60 anos', Infectados: 0, Obitos: 0},
  ];
  
  function calculo() {
    listaCasos.forEach((caso) => {
      var index = data.findIndex(data => data.name === caso.faixa)
      data[index].Infectados++
      if(caso.estado === "Óbito") {
        data[index].Obitos++
      }
    })
  }

  calculo()
    return (
      <BarChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 15,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="auto" padding={{ left: 20, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="Infectados" fill="#0091EA"/>
        <Bar dataKey="Obitos" fill="#000000" />

      </BarChart>
    );
  
}


/*faixa etaria dos infectados
vermelho grupo de risco*/
/*faixa etaria dos infectados
vermelho grupo de risco*/

/*
<BarChart
  width={450}
  height={200}
  data={dataObitos}
  margin={{
    top: 5, right: 30, left: 20, bottom: 15,
  }}
  barSize={20}
>
  <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
  <YAxis /> 
  <Tooltip />
  <Legend />
  <CartesianGrid strokeDasharray="3 3" />
  <Bar dataKey="Óbitos" fill={data[5].name === data.name ? '#D50000' : '#0091EA'} background={{ fill: '#FFFFFF' }} />

</BarChart>
*/