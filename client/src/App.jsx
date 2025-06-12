import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Tabs from "./components/Tabs";
import LiveFeed from "./components/LiveFeed";
import Diagnostics from "./components/Diagnostics";
import MissionLog from "./components/MissionLog";
import AdminPortal from "./components/AdminPortal";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="dashboard-wrapper">
      <h1>EdgeFleet.AI Dashboard</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">
        {activeTab === "live" && <LiveFeed />}
        {activeTab === "diagnostics" && <Diagnostics />}
        {activeTab === "log" && <MissionLog />}
        {!activeTab && <p>Please select a tab to view data.</p>}
      </div>
      <Link
        to="/admin"
        style={{ display: "block", marginTop: "20px", textAlign: "center" }}
      >
        Admin Portal
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
