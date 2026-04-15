import Image from 'next/image';
import Link from 'next/link';
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
     <div className="card-body ">
       
       <div className='  text-center gap-4 space-y-4'>
       <h2 className="text-lg font-bold">{app.name}</h2>
       <p>{app.days_since_contact}d ago</p>

       <div className={`flex gap-2 ${app.tags.length === 1 ? "justify-center" : "gap-8 justify-center"}`}>
  {app.tags.map((tag, index) => (
    <span
      key={index}
      className="bg-green-300 px-3 py-1 rounded-full text-sm"
    >
      {tag}
    </span>
  ))}
</div>
       <p className={`px-3 py- rounded-full text-sm inline-block ${getStatusColor(app.status)}`}>{app.status}</p>
        
        
       </div>
     </div>
   </Link>
    </div>
  );
};

export default AppCards;