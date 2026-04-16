'use client'
import { createContext, useState } from "react";

export const ContactFriendsContext = createContext();

const ContactFriendsProvider = ({children}) => {
  
  const [contactFriends, setContactFriends] = useState([]);

  const data = {
    contactFriends,
    setContactFriends,
  };

  return (
    <ContactFriendsContext.Provider value={data}>
      {children}
    </ContactFriendsContext.Provider>
  );
};

export default ContactFriendsProvider;