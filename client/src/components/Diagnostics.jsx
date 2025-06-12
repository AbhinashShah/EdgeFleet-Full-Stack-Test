// components/Diagnostics.jsx
import useFetchInterval from '../hooks/useFetchInterval';

const Diagnostics = () => {
  const data = useFetchInterval('/api/vitals', 2000);

  if (!data) return <p>Loading diagnostics...</p>;

  const { battery, temperature, signal } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <VitalCard label="Battery" value={`${battery}%`} />
      <VitalCard label="Temperature" value={`${temperature}°C`} />
      <VitalCard label="Signal Strength" value={`${signal}%`} />
    </div>
  );
};

const VitalCard = ({ label, value }) => (
  <div className="bg-gray-800 p-4 rounded-xl shadow-lg text-center">
    <h2 className="text-xl font-semibold">{label}</h2>
    <p className="text-2xl mt-2 text-blue-400">{value}</p>
  </div>
);

export default Diagnostics;
