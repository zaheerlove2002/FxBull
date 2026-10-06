function Sidebar({activePage,onNavigate}){


return(

<aside>

<h2>FxBull</h2>


<nav>


<p onClick={()=>onNavigate("dashboard")}>
Dashboard
</p>


<p onClick={()=>onNavigate("analytics")}>
Analytics
</p>


<p onClick={()=>onNavigate("trades")}>
Trade History
</p>


<p onClick={()=>onNavigate("journal")}>
Journal
</p>


</nav>


</aside>

)

}


export default Sidebar;
