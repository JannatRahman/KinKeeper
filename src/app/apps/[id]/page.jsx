import Image from 'next/image';
import React from 'react';
import { VscCopilotSnooze } from 'react-icons/vsc';
import { IoArchiveOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import ContactFriendsButton from '@/components/apps/ContactFriendsButton';

export const metadata = {
  title: "KinKeeper |  Details",
  
};

const getStatusColor = (status) => {
  switch (status) {
    case "overdue":
      return "bg-red-400 text-white";

    case "active":
      return "bg-green-400 text-white";

    case "On-track":
      return "bg-green-600 text-white";

    case "Almost-due":
      return "bg-yellow-500 text-white";

    default:
      return "bg-gray-100 text-gray-600";
  }
};


const appsPromise = async function () {

  const res = await fetch ("http://localhost:3000/data.json");
  const data = await res.json();
  return data
};


const AppDetailsPage =async ({params}) => {
 const apps = await appsPromise();

 const {id} = await params;

 const app = apps.find((app) => app.id == id);
  
 const totalFriends = apps.length;

   const days_since_contact = apps.filter(app => app.status === "active").length;

  const Goal = apps.filter(app => app.status === "overdue").length;

  
  const nextDues = apps.filter(app => app.days_since_contact <= 30).length;


  return (
    <div className='bg-gray-100 min-h-screen px-4 md:px-8 '>
  <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-10'>

    <div className='w-full lg:w-1/3'>
  <figure className='bg-white py-6 px-6 rounded-lg text-center'>
      <Image
      height={200}
      width={200}
      className=' mx-auto rounded-full w-28 h-28 object-cover '
      src={app.picture}
      alt={app.name} />
      
    <div className="card-body ">
               
    <div className='  mt-4 space-y-3'>
     <h2 className="text-lg font-bold">{app.name}</h2>
        
     <div className={`flex flex-wrap justify-center gap-2 ${app.tags.length === 1 ? "justify-center" : "gap-8 justify-center"}`}>
    {app.tags.map((tag, index) => (
   <span
    key={index}
    className="bg-green-300 px-3 py-1 rounded-full text-sm">
    {tag}</span> ))}
     </div>
     <p className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusColor(app.status)}`}>{app.status}</p> 
     <p className='text-sm text-gray-600'>{app.bio}</p>
     </div>
     <div>
      
     </div>
     </div>
    </figure>

    <div className=' mt-5 space-y-3'>
      <div className='flex gap-3 items-center justify-center p-3 bg-white font-semibold rounded-lg'>
        <VscCopilotSnooze /> 
        <p>Snooze 2 weeks</p>

      </div>

      <div className='flex gap-3 items-center justify-center p-3 bg-white font-semibold rounded-lg'>
        <IoArchiveOutline />
        <p>Archive</p>
      </div>

      <div className='flex gap-3 items-center justify-center p-3 bg-white font-semibold rounded-lg'>
        <MdDeleteOutline
          className='text-red-500'/>
        <p className='text-red-500'>Delete</p>
      </div>
    </div>
       </div>

       <div className='w-full lg:w-2/3 space-y-6'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className='bg-white shadow p-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg '>{days_since_contact}</p>
          <p>Days Since Contact</p>
        </div>

        <div className='bg-white shadow p-5 rounded-lg text-center'>
    <p className='text-[#244d3fFF] font-bold text-lg'>{Goal}</p>
          <p>Goal </p>
        </div>

        <div className='bg-white shadow p-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>{nextDues}</p>
          <p>Next Dues</p>
        </div>

        
      </div>

  <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-5 rounded-lg gap-4'>
  <div className='space-y-3'>
  <h2 className='text-[#244d3fFF] text-xl font-semibold'>Relationship Goal</h2>
  <p>Connect every <span className='font-bold'>30 days</span></p>
     </div>
  <button className='btn w-full sm:w-auto'>Edit</button>
        </div>

    <ContactFriendsButton app={app}></ContactFriendsButton>

       </div>
</div>

    </div>
  );
};

export default AppDetailsPage;