import "./Tabs.css";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "live", label: "Live Feed" },
    { id: "diagnostics", label: "Diagnostics" },
    { id: "log", label: "Mission Log" },
  ];

  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
