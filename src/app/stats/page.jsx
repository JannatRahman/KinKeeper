'use client'
import { ContactFriendsContext } from '@/context/ContactFriendsProvider';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

// export const metadata = {
//   title: "KinKeeper | Stats",
  
// };

const Stats = () => {
  const {contactFriends} = useContext(ContactFriendsContext);

 

   // ✅ YOUR ORIGINAL LOGIC (kept)
  const callCount = contactFriends.filter(i => i.type === 'call').length;
  const textCount = contactFriends.filter(i => i.type === 'text').length;
  const videoCount = contactFriends.filter(i => i.type === 'video').length;
 

  const data = [
  { name: 'Call', value: callCount, fill: '#0088FE' },
  { name: 'Text', value: textCount, fill: '#00C49F' },
  { name: 'Video', value: videoCount, fill: '#FFBB28' },
];


  return (
    <div className='bg-gray-100 min-h-screen py-6 sm:py-10'>
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>

       {/* Heading */}
  <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-6 sm:py-10 text-center sm:text-left '>Friendship Analytics</h2>

  {/* Card */}
    <div className='flex flex-col lg:flex-row items-center justify-center bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md gap-6'>

      <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-[#244d3fFF] text-center lg:text-left'>By Interaction Type</h2>

      

    <div className='w-full flex justify-center'>

   <PieChart style={{ 
    width: '100%',
    maxWidth: '500px',
    maxHeight: '80vh', aspectRatio: 1 }} responsive>
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
    </div>

  );
};

export default Stats;