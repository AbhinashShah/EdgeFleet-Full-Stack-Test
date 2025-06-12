// components/MissionLog.jsx
import useFetchInterval from '../hooks/useFetchInterval';

const MissionLog = () => {
  const logs = useFetchInterval('/api/logs', 5000);

  if (!logs) return <p>Loading logs...</p>;

  return (
    <div className="overflow-y-auto max-h-[500px] space-y-4">
      {logs.map((log, idx) => (
        <div
          key={idx}
          className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700"
        >
          <pre className="text-sm text-gray-300 whitespace-pre-wrap">
            {JSON.stringify(log, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
};

export default MissionLog;
