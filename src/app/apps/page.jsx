import React from 'react';

const AppDetailsPage =async ({params}) => {
  const {id} = await params;
  return (
    <div>
      app details page
    </div>
  );
};

export default AppDetailsPage;