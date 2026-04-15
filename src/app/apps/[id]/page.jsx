import Image from 'next/image';
import React from 'react';


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

 const totalFriends = apps.length;

   const onTrack = apps.filter(app => app.status === "active").length;

  const needAttention = apps.filter(app => app.status === "overdue").length;

  
  const interactionsThisMonth = apps.filter(app => app.days_since_contact <= 30).length;

  const res = await fetch ("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
}

const AppDetailsPage =async ({params}) => {
 const apps = await appsPromise();

 const {id} = await params;

 const app = apps.find((app) => app.id == id);
 console.log(app, "apps");


  return (
    <div className='bg-gray-100'>
  <div className='container mx-auto flex'>

    <div>
    <figure className='bg-white py-5'>
      <Image
      height={200}
      width={200}
      className=' w-[110] rounded-full object-contain'
      src={app.picture}
      alt={app.name} />
    <div className="card-body ">
               
    <div className='  text-center gap-4 space-y-4'>
     <h2 className="text-lg font-bold">{app.name}</h2>
     <p>{app.days_since_contact}d ago</p>
        
     <div className={`flex gap-2 ${app.tags.length === 1 ? "justify-center" : "gap-8 justify-center"}`}>
    {app.tags.map((tag, index) => (
   <span
    key={index}
    className="bg-green-300 px-3 py-1 rounded-full text-sm">
    {tag}</span> ))}
     </div>
     <p className={`px-3 py- rounded-full text-sm inline-block ${getStatusColor(app.status)}`}>{app.status}</p> </div>
     </div>
    </figure>
       </div>

       <div>
        <div className='flex gap-20 justify-center'>
        <div className='bg-white shadow px-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>{totalFriends}</p>
          <p>Total Friends</p>
        </div>

        <div className='bg-white shadow px-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>{onTrack}</p>
          <p>On Track</p>
        </div>

        <div className='bg-white shadow px-5 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>{needAttention}</p>
          <p>Need Attention</p>
        </div>

        <div className='bg-white shadow  px-3 py-2 rounded-lg text-center'>
          <p className='text-[#244d3fFF] font-bold text-lg'>{interactionsThisMonth}</p>
          <p>Interactions This Month</p>
        </div>
      </div>

       </div>
</div>

    </div>
  );
};

export default AppDetailsPage;