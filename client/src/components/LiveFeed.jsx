// components/LiveFeed.jsx
import useFetchInterval from '../hooks/useFetchInterval';

const LiveFeed = () => {
  const data = useFetchInterval('/api/feed', 3000);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center space-y-4">
      <img
        src={`data:image/jpeg;base64,${data.image}`}
        alt="Live feed"
        className="rounded shadow-lg max-w-md"
      />
      <p className="text-sm text-gray-400">Timestamp: {new Date(data.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default LiveFeed;
