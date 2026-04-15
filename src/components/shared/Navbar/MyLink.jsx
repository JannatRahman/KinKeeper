'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href, children, }) => {
  const pathname = usePathname();
  return (
    
      <Link 
      href={href}
      className={` p-1 font-semibold ${pathname === href ? " bg-[#244d3fFF] text-white px-2 " : ""}`}>
      {children}
      </Link>
    
    
  );
};

export default MyLink;