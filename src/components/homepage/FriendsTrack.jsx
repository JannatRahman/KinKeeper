import React from 'react';

const FriendsTrack = ({apps}) => {
 
  const totalFriends = apps.length;

   const onTrack = apps.filter(app => app.status === "active").length;

  const needAttention = apps.filter(app => app.status === "overdue").length;

  
  const interactionsThisMonth = apps.filter(app => app.days_since_contact <= 30).length;

  return (
    <div className='bg-gray-100 py-5'>

    <div className=' container mx-auto'>
      <div className='flex gap-20 justify-center'>
        <div className='bg-white shadow px-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>{totalFriends}</p>
          <p>Total Friends</p>
        </div>

        <div className='bg-white shadow px-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>{onTrack}</p>
          <p>On Track</p>
        </div>

        <div className='bg-white shadow px-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>{needAttention}</p>
          <p>Need Attention</p>
        </div>

        <div className='bg-white shadow  px-3 py-2 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>{interactionsThisMonth}</p>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FriendsTrack;