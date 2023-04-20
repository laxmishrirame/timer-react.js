

import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';
  
  
const App = () => {
  
// Sample data
const data = [
  {name: 'ramoji-film', students: 400},
  {name: 'Technical scripter', students: 700},
  {name: 'isqe-i-knack', students: 200},
  {name: 'love-o-mania', students: 1000}
];
  
  
return (
<AreaChart width={600} height={600} data={data}>
    <Area dataKey="students" fill="purple" stroke="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </AreaChart>
);
}
  
export default App;
