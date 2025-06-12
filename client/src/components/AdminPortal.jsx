import React, { useState } from 'react';

const mockDrones = [
  { id: 'DRN001', name: 'Alpha', status: 'In Mission' },
  { id: 'DRN002', name: 'Bravo', status: 'In Mission' },
];

const AdminPortal = () => {
  const [drones, setDrones] = useState(mockDrones);

  const sendCommand = (droneId, command) => {
    const confirmed = window.confirm(`Send '${command}' to ${droneId}?`);
    if (!confirmed) return;

    // Mock sending to backend
    setTimeout(() => {
      alert(`Command '${command}' sent to ${droneId}`);
      // Optionally update UI
      setDrones((prev) =>
        prev.map((drone) =>
          drone.id === droneId ? { ...drone, status: command === 'pause' ? 'Paused' : 'Returning' } : drone
        )
      );
    }, 500);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Portal</h2>
      <p>Active Drones:</p>
      <ul>
        {drones.map((drone) => (
          <li key={drone.id} style={{ marginBottom: '10px' }}>
            <strong>{drone.name}</strong> ({drone.id}) – Status: {drone.status}
            <br />
            <button onClick={() => sendCommand(drone.id, 'pause')}>Pause Mission</button>
            <button onClick={() => sendCommand(drone.id, 'return')}>Return to Base</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPortal;
