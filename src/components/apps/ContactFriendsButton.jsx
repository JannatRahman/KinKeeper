'use client'
import Image from 'next/image';
import React, { useContext } from 'react';
import call from '@/assets/call.png';
import video from '@/assets/video.png';
import text from '@/assets/text.png'
import  { ContactFriendsContext } from '@/context/ContactFriendsProvider';
import { toast } from 'react-toastify';



const ContactFriendsButton = ({app}) => {


  const {contactFriends,setContactFriends} = useContext(ContactFriendsContext);
  
  
  const contactButton = (type) => {
  const newContact = {
    name: app.name,
    type: type,
    date: new Date().toLocaleString(),
  };

  setContactFriends((prev) => [...prev, newContact]);

  toast.success(`${type} with ${app.name}`);
};
  return (
    <div className='bg-white p-5 rounded-lg'>
       <h3 className='text-[#244d3fFF] text-lg font-semibold mb-5 text-center sm:text-left'>Quick Check-in</h3>
       <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
       <button className='bg-gray-100 py-4 rounded-lg text-center space-y-2 cursor-pointer' onClick={() => contactButton("call")}>
      <Image 
      src={call}
       alt='Call'
       width={30} 
       className='mx-auto'/>
      <p>Call</p>
      </button >
    
      <button  className='bg-gray-100 py-4 rounded-lg text-center space-y-2 cursor-pointer' onClick={() => contactButton("text")}>
      <Image 
      src={text}
      alt='Text'
      width={30} 
      className='mx-auto'/>
       <p>Text</p>
      </button >
    
     <button  className='bg-gray-100 py-4 rounded-lg text-center space-y-2 cursor-pointer' onClick={() => contactButton("video")}>
       <Image 
       src={video}
       alt='Video'
       width={30} 
       className='mx-auto'/>
      <p>Video</p>
       </button >
      </div>
    
            </div>
  );
};

export default ContactFriendsButton;