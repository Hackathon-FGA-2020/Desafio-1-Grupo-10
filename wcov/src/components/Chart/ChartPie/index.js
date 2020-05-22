import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, Legend,
} from 'recharts';

const data = [
  { name: 'Óbitos', value: 400 },
  { name: 'Graves', value: 300 },
  { name: 'Moderados', value: 300 },
  { name: 'Leves', value: 200 },
  { name: 'Recuperados', value: 100 },
];

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

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <PieChart width={400} height={180}>
        <Pie
          data={data}
          cx={240}
          cy={80}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        
        <Legend iconSize={10} width={350} height={100} layout="vertical" verticalAlign="middle" wrapperStyle={renderCustomizedLabel} />
        
        </PieChart>
    );
  }
}
