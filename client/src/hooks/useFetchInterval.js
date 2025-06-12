// hooks/useFetchInterval.js
import { useEffect, useState } from 'react';

const useFetchInterval = (url, interval = 3000) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(`Error fetching ${url}`, err);
      }
    };
    fetchData();
    const id = setInterval(fetchData, interval);
    return () => clearInterval(id);
  }, [url, interval]);

  return data;
};

export default useFetchInterval;