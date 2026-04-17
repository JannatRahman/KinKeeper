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
    <div className='w-full'>
      <Link href={`/apps/${app.id}`}  className="card w-full max-w-sm mx-auto bg-base-100 shadow-md hover:shadow-xl ">
     <figure className='bg-white py-4 flex justify-center '>
       <Image
        height={200}
        width={200}
       className=' w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-contain '
         src={app.picture}
         alt={app.name} />
        
     </figure>
     <div className=" ">
       
       <div className='  card-body px-3 sm:px-6 text-center space-y-2'>
       <h2 className="text-base sm:text-lg md:text-xl font-bold">{app.name}</h2>
       <p className='text-sm text-gray-500'>{app.days_since_contact}d ago</p>

       <div className={`flex gap-2 ${app.tags.length === 1 ? "justify-center" : "gap-5 justify-center"}`}>
  {app.tags.map((tag, index) => (
    <span
      key={index}
      className="bg-green-300 px-3 py-1 rounded-full text-xs sm:text-sm"
    >
      {tag}
    </span>
  ))}
</div>
       <p className={`px-3 py-1 rounded-full text-xs sm:text-sm inline-block ${getStatusColor(app.status)}`}>{app.status}</p>
        
        
       </div>
     </div>
   </Link>
    </div>
  );
};

export default AppCards;