'use client'
import ContactFriendsProvider from '@/context/ContactFriendsProvider';
import React from 'react';

const Providers = ({children}) => {
  return(
     <ContactFriendsProvider>
      {children}
    </ContactFriendsProvider>
    
  );
  
  
};

export default Providers;