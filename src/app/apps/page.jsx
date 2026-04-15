import React from 'react';

const appsPromise = async function () {
  const res = await fetch ("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
}

const AppDetailsPage =async ({params}) => {
 const apps = await appsPromise();
 console.log(apps, "all apps")

  const {id} = await params;
  return (
    <div>
      app details page
    </div>
  );
};

export default AppDetailsPage;