import React from 'react';

const FriendsTrack = ({apps}) => {
 
  const totalFriends = apps.length;

   const onTrack = apps.filter(app => app.status === "active").length;

  const needAttention = apps.filter(app => app.status === "overdue").length;

  
  const interactionsThisMonth = apps.filter(app => app.days_since_contact <= 30).length;

  return (
    <div className='bg-gray-100 py-6'>

    <div className=' container mx-auto px-4'>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        <div className='bg-white shadow-md rounded-xl text-center py-4 sm:py-5'>
          <p className='text-[#244d3f] font-bold text-lg sm:text-xl md:text-2xl'>{totalFriends}</p>
          <p className='text-sm sm:text-base text-gray-600'>Total Friends</p>
        </div>

        <div className='bg-white shadow-md rounded-xl text-center py-4 sm:py-5'>
          <p className='text-[#244d3f] font-bold text-lg sm:text-xl md:text-2xl'>{onTrack}</p>
          <p>On Track</p>
        </div>

        <div className='bg-white shadow-md rounded-xl text-center py-4 sm:py-5'>
          <p className='text-[#244d3f] font-bold text-lg sm:text-xl md:text-2xl'>{needAttention}</p>
          <p>Need Attention</p>
        </div>

        <div className='bg-white shadow-md rounded-xl text-center py-4 sm:py-5 px-2'>
          <p className='text-[#244d3f] font-bold text-lg sm:text-xl md:text-2xl'>{interactionsThisMonth}</p>
          <p className='text-xs sm:text-sm md:text-base text-gray-600'>Interactions This Month</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FriendsTrack;