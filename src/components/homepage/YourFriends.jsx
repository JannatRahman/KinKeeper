import React from 'react';
import AppCards from '../ui/AppCards';

const appsPromise = async function () {
  const res = await fetch ("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
}

const YourFriends =async () => {
  const apps = await appsPromise();

  

  return (
   <div className='bg-gray-100'>

    <div className=' container mx-auto'>
      <h2>Your Friends</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
      {
        apps.map((app, index) => {
           return (
            <AppCards app={app} key={index}></AppCards>
           )
        })
      }
      </div>
    </div>
   </div>

  );
};

export default YourFriends;