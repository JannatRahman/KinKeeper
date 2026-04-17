import React from 'react';
import { FaHome } from 'react-icons/fa';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import MyLink from './MyLink';

const Navbar = () => {
  
  return (
    <div className='shadow'>

    <div className='container mx-auto  flex justify-between items-center py-4' >
      <div>
        <h2 className='font-semibold text-green-950 text-2xl'><span className=' font-bold '>Keen</span>Keeper</h2>
      </div>

      <ul>
         
       </ul>

      <div className='flex gap-5 items-center text-[#244d3fFF] cursor-pointer'>
       <div className='flex gap-2 items-center '>
        <FaHome />
        <MyLink className=" className='flex gap-2 items-center bg-[#244d3fFF]" href={"/"}>
        Home</MyLink>
       </div>

       

        <div className='flex gap-2 items-center text-green-800 cursor-pointer'>
          <RiTimeLine />
         <MyLink href={"/timeline"}>Timeline</MyLink>
        </div>

        <div className='flex gap-2 items-center text-green-800 cursor-pointer'>
          <TfiStatsUp />
          <MyLink href={"/stats"}>Stats</MyLink>
        </div>
      </div>


      
    </div>
    </div>
  );
};

export default Navbar;