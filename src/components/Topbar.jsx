import React from "react";

function Topbar(){

  return(

    <header className="topbar">

      <div>
        <h3>FxBull Trading Journal</h3>
        <span>AI Powered Trading Analytics</span>
      </div>


      <div className="top-actions">

        <button>
          🔔
        </button>

        <button>
          👤 Trader
        </button>

      </div>

    </header>

  );

}

export default Topbar;
