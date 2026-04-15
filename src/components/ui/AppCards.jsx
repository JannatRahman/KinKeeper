import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const getStatusColor = (status) => {
  switch (status) {
    case "overdue":
      return "bg-red-100 text-red-600";
    case "active":
      return "bg-green-100 text-green-600";
    case "pending":
      return "bg-yellow-100 text-yellow-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const AppCards = ({app}) => {
  return (
    <div>
      <Link href={`/apps/${app.id}`}  className="card bg-base-100 w-96 shadow-sm">
     <figure className='bg-white py-5'>
       <Image
        height={200}
        width={200}
       className=' w-[110] rounded-full object-contain'
         src={app.picture}
         alt={app.name} />
        
     </figure>
     <div className="card-body">
       
       <div className='  text-center gap-4'>
       <h2 className="text-lg font-bold">{app.name}</h2>
       <p>{app.days_since_contact}d  ago</p>
       <p className='bg-green-300 p-2 rounded-2xl w-30 '>{app.tags}</p>
       <p className={`px-3 py- rounded-full text-sm inline-block ${getStatusColor(app.status)}`}>{app.status}</p>
        
        
       </div>
     </div>
   </Link>
    </div>
  );
};

export default AppCards;