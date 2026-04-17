'use client'
import { useEffect, useState } from 'react';

const UseApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApps = async () => {
      
        const res = await fetch('/data.json');
        const data = await res.json();


        setTimeout(() => {
          setApps(data);
          setLoading(false)
        }, 1000);
      
    }

    fetchApps();
  }, []);

  return { apps, loading };
};

export default UseApps;