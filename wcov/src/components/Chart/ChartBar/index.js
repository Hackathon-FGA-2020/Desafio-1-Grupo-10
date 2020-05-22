import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import './styles.css'

const data = [
  {
    name: '<= 19 anos', uv: 4000, Infectados: 200, amt: 2400,
  },
  {
    name: '20 a 29 anos', uv: 3000, Infectados: 800, amt: 2210,
  },
  {
    name: '30 a 39 anos', uv: 2000, Infectados: 1530, amt: 2290,
  },
  {
    name: '40 a 49 anos', uv: 2780, Infectados: 1210, amt: 2000,
  },
  {
    name: '50 a 59 anos', uv: 1890, Infectados: 718, amt: 2181,
  },
  {
    name: '>= 60 anos', uv: 2390, Infectados: 711, amt: 2500,
  },
  
];


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

  render() {
    return (
      <BarChart
        width={350}
        height={200}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="Infectados" fill={data[5].name === data.name ? '#D50000' : '#0091EA'} background={{ fill: '#FFFFFF' }} />

      </BarChart>
    );
  }
}


/*faixa etaria dos infectados
vermelho grupo de risco*/
/*faixa etaria dos infectados
vermelho grupo de risco*/