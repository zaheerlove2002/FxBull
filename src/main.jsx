import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";

function App(){

return(
<div className="layout">

<Sidebar />

<div className="content">

<Topbar />

<Dashboard />

</div>

</div>
)

}


createRoot(document.getElementById("root"))
.render(<App />);
