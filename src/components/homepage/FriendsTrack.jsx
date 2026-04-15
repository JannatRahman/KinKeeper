import React from 'react';

const FriendsTrack = () => {
  return (
    <div className='bg-gray-100 py-5'>

    <div className=' container mx-auto'>
      <div className='flex gap-20 justify-center'>
        <div className='bg-white shadow px-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>10</p>
          <p>Total Friends</p>
        </div>

        <div className='bg-white shadow px-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>0</p>
          <p>On Track</p>
        </div>

        <div className='bg-white shadow px-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>0</p>
          <p>Need Attention</p>
        </div>

        <div className='bg-white shadow  px-3 py-2 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>0</p>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FriendsTrack;