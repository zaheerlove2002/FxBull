import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import TradeHistory from "./pages/TradeHistory";
import Journal from "./pages/Journal";


function App(){

const [activePage,setActivePage] = useState("dashboard");


const renderPage = ()=>{

switch(activePage){

case "analytics":
return <Analytics />;


case "trades":
return <TradeHistory />;


case "journal":
return <Journal />;


default:
return <Dashboard />;

}

};


return(

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

)

}


export default App;
