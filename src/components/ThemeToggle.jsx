import { useState } from "react";

function ThemeToggle(){

const [dark,setDark] = useState(true);


const toggleTheme = () => {

setDark(!dark);

if(dark){
document.body.classList.add("light-mode");
}
else{
document.body.classList.remove("light-mode");
}

}


return(
<button onClick={toggleTheme}>

{dark ? "☀️ Light" : "🌙 Dark"}

</button>
)

}

export default ThemeToggle;
