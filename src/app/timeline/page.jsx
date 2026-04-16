'use client'
import React, { useContext } from 'react';
import { ContactFriendsContext } from '@/context/ContactFriendsProvider';
import Image from 'next/image';
import textImg from '@/assets/text.png';
import callImg from '@/assets/call.png';
import videoImg from '@/assets/video.png';
import NoActivityPage from './NoActivity';
import { toast } from 'react-toastify';



const TimeLine = ({app}) => {
  const {contactFriends,setContactFriends} = useContext(ContactFriendsContext);
   console.log("contactFriends:", contactFriends);

  

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

  return (
    <div className='bg-gray-100 min-h-screen py-6 sm:py-10'>
     <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        
  <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10'>Timeline</h2>

  {
  contactFriends.length === 0 ? (
  <NoActivityPage></NoActivityPage>
   ) : (
   <div className='space-y-3 sm:space-y-4'>

   {contactFriends.map((app, index) => (
   <div key={index} className='flex items-start sm:items-center gap-3 sm:gap-5 bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition'>
                  
   <Image 
   src={getIcon(app.image)} 
   alt={app.name}
   width={30}
   height={30}
   className='sm:w-[35px] sm:h-[35px]'/>
   

    <div className='min-w-0'>
     <p className='text-base sm:text-lg font-semibold truncate'>
     {app.name}
      </p>
    <p className='text-xs sm:text-sm text-gray-500 '>
       {app.date}
     </p>
    </div>

    </div>
              ))}
            </div>
          )
        }

      </div>
    </div>
  );
};

export default TimeLine;