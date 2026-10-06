import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import TradeHistory from "./pages/TradeHistory";
import Journal from "./pages/Journal";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "analytics":
        return <Analytics />;

      case "trades":
        return <TradeHistory />;

      case "journal":
        return <Journal />;

      case "strategies":
        return (
          <main>
            <h1>Strategies</h1>
            <div className="card">
              Strategy management will appear here.
            </div>
          </main>
        );

      case "broker":
        return (
          <main>
            <h1>Broker Hub</h1>
            <div className="card">
              Broker connection system will appear here.
            </div>
          </main>
        );

      case "settings":
        return (
          <main>
            <h1>Settings</h1>
            <div className="card">
              Account settings will appear here.
            </div>
          </main>
        );

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="layout">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <div className="content">
        <Topbar />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
