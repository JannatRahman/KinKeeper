'use client'
import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

// export const metadata = {
//   title: "KinKeeper | Stats",
  
// };

const Stats = () => {
  const data = [
  { name: 'Call', value: 400, fill: '#0088FE' },
  { name: 'Text', value: 300, fill: '#00C49F' },
  { name: 'Video', value: 300, fill: '#FFBB28' },
 
];


  return (
    <div className='bg-gray-100'>
    <div className='container mx-auto '>
  <h2 className='text-5xl font-bold py-15 '>Friendship Analytics</h2>
    <div className='mx-auto flex justify-center bg-white p-5 rounded-lg mb-10'>

   <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />

      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
    </div>
      </div>
    </div>

  );
};

export default Stats;