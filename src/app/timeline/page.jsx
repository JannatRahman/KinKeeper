'use client'
import React, { useContext, useState } from 'react';
import { ContactFriendsContext } from '@/context/ContactFriendsProvider';
import Image from 'next/image';
import textImg from '@/assets/text.png';
import callImg from '@/assets/call.png';
import videoImg from '@/assets/video.png';
import NoActivityPage from './NoActivity';

const TimeLine = () => {
  const { contactFriends = [] } = useContext(ContactFriendsContext) || {};

  const [filter, setFilter] = useState('all');

  const getIcon = (type) => {
    switch (type?.toLowerCase().trim()) {
      case "call":
        return callImg;
      case "video":
        return videoImg;
      case "text":
        return textImg;
      default:
        return textImg;
    }
  };

  const filteredData = contactFriends.filter((item) => {
    if (filter === 'all') return true;

    return item.type?.toLowerCase().trim() === filter;
  });

  return (
    <div className='bg-gray-100 min-h-screen py-6 sm:py-10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>

        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10'>
          Timeline
        </h2>

        {/* Dropdown */}
        <div className="dropdown mb-6">
          <div tabIndex={0} role="button" className="btn bg-white text-lg text-[#244d3fFF]">
            Filter Timeline: {filter}
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white rounded-box z-10 w-52 p-2 shadow"
          >
            <li><a onClick={() => setFilter('all')}>All</a></li>
            <li><a onClick={() => setFilter('call')}>Call</a></li>
            <li><a onClick={() => setFilter('video')}>Video</a></li>
            <li><a onClick={() => setFilter('text')}>Text</a></li>
          </ul>
        </div>

        {contactFriends.length === 0 ? (
          <NoActivityPage />
        ) : (
          <div className='space-y-3 sm:space-y-4'>
            {filteredData.map((item, index) => (
              <div
       key={item.id || index}
    className='flex items-start sm:items-center gap-3 sm:gap-5 bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition'
              >
                <Image
                  src={getIcon(item.type)}
                  alt={item.name || 'activity'}
                  width={30}
                  height={30}
                  className='sm:w-[35px] sm:h-[35px]'
                />

                <div className='min-w-0'>
                  <p className='text-base sm:text-lg font-semibold truncate'>
                    {`${item.type} with ${item.name}`}
                  </p>
                  <p className='text-xs sm:text-sm text-gray-500'>
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default TimeLine;