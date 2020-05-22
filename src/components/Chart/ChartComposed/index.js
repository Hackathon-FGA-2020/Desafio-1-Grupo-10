import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
  {name: 'Page 1', uv: 590, pv: 800, amt: 1400,},
  {name: 'Page 2', uv: 868, pv: 967, amt: 1506,},
  {name: 'Page 3', uv: 1397, pv: 1098, amt: 989,},
  {name: 'Page 4', uv: 1480, pv: 1200, amt: 1228,},
  {name: 'Page 5', uv: 1520, pv: 1108, amt: 1100,},
  {name: 'Page 6', uv: 1400, pv: 680, amt: 1700,},
  {name: 'Page 7', uv: 590, pv: 800, amt: 1400,},
  {name: 'Page 8', uv: 868, pv: 967, amt: 1506,},
  {name: 'Page 9', uv: 1397, pv: 1098, amt: 989,},
  {name: 'Page 10', uv: 1480, pv: 1200, amt: 1228,},
  {name: 'Page 11', uv: 1520, pv: 1108, amt: 1100,},
  {name: 'Page 12', uv: 1400, pv: 680, amt: 1700,},
  {name: 'Page 13', uv: 590, pv: 800, amt: 1400,},
  {name: 'Page 14', uv: 868, pv: 967, amt: 1506,},
  {name: 'Page 15', uv: 1397, pv: 1098, amt: 989,},
  {name: 'Page 16', uv: 1480, pv: 1200, amt: 1228,},
  {name: 'Page 17', uv: 1520, pv: 1108, amt: 1100,},
  {name: 'Page 18', uv: 1400, pv: 680, amt: 1700,},
  {name: 'Page 19', uv: 590, pv: 800, amt: 1400,},
  {name: 'Page 20', uv: 868, pv: 967, amt: 1506,},
  {name: 'Page 21', uv: 1397, pv: 1098, amt: 989,},
  {name: 'Page 22', uv: 1480, pv: 1200, amt: 1228,},
  {name: 'Page 23', uv: 1520, pv: 1108, amt: 1100,},
  {name: 'Page 24', uv: 1400, pv: 680, amt: 1700,},
  {name: 'Page 25', uv: 1397, pv: 1098, amt: 989,},
  {name: 'Page 26', uv: 1480, pv: 1200, amt: 1228,},
  {name: 'Page 27', uv: 1520, pv: 1108, amt: 1100,},
  {name: 'Page 28', uv: 1400, pv: 680, amt: 1700,},
  {name: 'Page 29', uv: 590, pv: 800, amt: 1400,},
  {name: 'Page 30', uv: 868, pv: 967, amt: 1506,},
  {name: 'Page 31', uv: 1397, pv: 1098, amt: 989,},
  {name: 'Page 32', uv: 1480, pv: 1200, amt: 1228,},
  {name: 'Page 33', uv: 1520, pv: 1108, amt: 1100,},
  {name: 'Page 34', uv: 1400, pv: 680, amt: 1700,},
  {name: 'Page 35', uv: 1400, pv: 680, amt: 1700,},
  {name: 'Page 36', uv: 1400, pv: 680, amt: 1700,},
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

  render() {
    return (
      <ComposedChart
        width={900}
        height={200}
        data={data}
        margin={{
          top: 20, right: 30, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}
