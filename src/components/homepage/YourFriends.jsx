'use client'
import React from 'react';
import AppCards from '../ui/AppCards';
import FriendsTrack from './FriendsTrack';
import UseApps from '@/hooks/UseApps';
import { HashLoader } from 'react-spinners';

const YourFriends = () => {
  const { apps, loading } = UseApps();

  return (
    <div className='bg-gray-100 min-h-screen'>

      {/* Top Section */}
      <FriendsTrack apps={apps} />

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <HashLoader size={50} color="#244d3f" />
        </div>
      ) : (
        <div className='container mx-auto pb-20 px-4'>
          
          <h2 className='text-3xl font-bold pb-10 pt-5'>
            Your Friends
          </h2>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {apps.map((app, index) => (
              <AppCards key={index} app={app} />
            ))}
          </div>

        </div>
      )}

    </div>
  );
};

export default YourFriends;