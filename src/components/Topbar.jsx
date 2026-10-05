import ThemeToggle from "./ThemeToggle";

function Topbar(){

return(
<div className="topbar">

<h3>FxBull Trading Journal</h3>

<div>
<input 
type="text" 
placeholder="Search..."
/>

<ThemeToggle />

</div>

</div>
)

}

export default Topbar;
