import React from 'react';
import {
  PieChart, Pie, Cell, Legend, Label, Tooltip
} from 'recharts';


const COLORS = ['#212121', '#D50000', '#FFEB3B', '#64DD17', '#0091EA'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default function Piech({totNum, listaCasos}){
  
  const data = [
    { name: 'Óbitos', value: 0 },
    { name: 'Graves', value: 0 },
    { name: 'Moderados', value: 0 },
    { name: 'Leves', value: 0 },
    { name: 'Recuperados', value: 0 },
  ];
  
  function calculo(){
    listaCasos.forEach((regiao) =>{
      data[0].value += regiao.obitos
      data[1].value += regiao.graves
      data[2].value += regiao.moderados
      data[3].value += regiao.leves
      data[4].value += regiao.recuperados
    })
  }

  calculo()

    return (
      <>
      
      <PieChart width={400} height={180}>
        <Pie
          data={data}
          cx={140}
          cy={80}
          labelLine={false}
          
          fill="#8884d8"
          dataKey="value"
          innerRadius= {40}
          outerRadius= {75}
          paddingAngle={5}

        >
          <Label value = {totNum} position = "center"/>
          
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }

        </Pie>

        <Tooltip/>       
        
        <Legend iconSize={10} width={120} height={100} align = "left" layout="vertical" verticalAlign="middle" wrapperStyle={renderCustomizedLabel} />

        </PieChart>

        
        
        </>
    );
}
