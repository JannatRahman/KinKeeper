import Image from 'next/image';
import React from 'react';
import call from '@/assets/call.png';
import video from '@/assets/video.png';
import text from '@/assets/text.png'
import { VscCopilotSnooze } from 'react-icons/vsc';
import { IoArchiveOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';


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
    <div className='bg-gray-100 '>
  <div className='container mx-auto flex justify-around mt-10'>

    <div className=''>
  <figure className='bg-white py-5 px-10 rounded-lg '>
      <Image
      height={200}
      width={200}
      className=' w-[110] rounded-full '
      src={app.picture}
      alt={app.name} />
    <div className="card-body ">
               
    <div className='  text-center gap-4 space-y-2'>
     <h2 className="text-lg font-bold">{app.name}</h2>
        
     <div className={`flex gap-2 ${app.tags.length === 1 ? "justify-center" : "gap-8 justify-center"}`}>
    {app.tags.map((tag, index) => (
   <span
    key={index}
    className="bg-green-300 px-3 py-1 rounded-full text-sm">
    {tag}</span> ))}
     </div>
     <p className={`px-3 py- rounded-full text-sm inline-block ${getStatusColor(app.status)}`}>{app.status}</p> 
     <p>{app.bio}</p>
     </div>
     <div>
      
     </div>
     </div>
    </figure>

    <div className=' mt-5 mb-5 rounded-lg space-y-2 '>
      <div className='flex gap-3 items-center justify-center p-3 bg-white font-semibold'>
        <VscCopilotSnooze /> 
        <p>Snooze 2 weeks</p>

      </div>

      <div className='flex gap-3 items-center justify-center p-3 bg-white font-semibold'>
        <IoArchiveOutline />
        <p>Archive</p>
      </div>

      <div className='flex gap-3 items-center justify-center p-3 bg-white font-semibold'>
        <MdDeleteOutline
          className='text-red-500'/>
        <p className='text-red-500'>Delete</p>
      </div>
    </div>
       </div>

       <div>
        <div className='flex gap-30 justify-center'>
        <div className='bg-white shadow p-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg '>{days_since_contact}</p>
          <p>Days Since Contact</p>
        </div>

        <div className='bg-white shadow px-8 py-4 rounded-lg text-center'>
    <p className='text-[#244d3fFF] font-bold text-lg'>{Goal}</p>
          <p>Goal </p>
        </div>

        <div className='bg-white shadow px-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>{nextDues}</p>
          <p>Next Dues</p>
        </div>

        
      </div>

  <div className='flex justify-between bg-white p-5 mt-5 rounded-lg'>
  <div className='space-y-3'>
  <h2 className='text-[#244d3fFF] text-2xl'>Relationship Goal</h2>
  <p>Connect every <span className='font-bold'>30 days</span></p>
     </div>
  <button className='btn'>Edit</button>
        </div>

    <div className='bg-white mt-10 mb-10 p-5 space-y-5 rounded-lg'>
   <h3 className='text-[#244d3fFF] text-lg font-semibold pl-8'>Quick Check-in</h3>
   <div className='flex gap-10 justify-around'>
   <div className='bg-gray-100 px-15 py-3 space-y-3 rounded-lg items-center'>
  <Image 
  src={call}
   alt='call'
   width={30} />
  <p>Call</p>
  </div>

  <div className='bg-gray-100 px-15 py-3 space-y-3 rounded-lg items-center'>
  <Image 
  src={text}
  alt='text'
  width={30} />
   <p>Text</p>
  </div>

 <div className='bg-gray-100 px-15 py-3 space-y-3 rounded-lg items-center'>
   <Image 
   src={video}
   alt='Video'
   width={30} />
  <p>Video</p>
   </div>
  </div>

        </div>

       </div>
</div>

    </div>
  );
};

export default AppDetailsPage;