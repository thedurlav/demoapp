import { useState } from "react";

const Mode = () => {

    let [darkMode,setDarkMode] = useState(false);

    let lightTheme = {backgroundColor:"skyblue",color:"black"}
    let darkTheme = {backgroundColor : "black",color: "skyblue"}



   return (   
        <div style={darkMode?darkTheme:lightTheme} className="cont">  
            <h1>Light Mode and Dark Mode</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium cum, sequi quaerat distinctio suscipit tenetur incidunt quos ullam? Suscipit aliquam aliquid maiores, debitis doloremque consequuntur dicta nesciunt reiciendis id earum! Repellendus et saepe pariatur omnis nisi atque recusandae quasi nobis cum, assumenda fugiat quisquam cupiditate perspiciatis, a eveniet adipisci!</p>
            <button onClick={()=>{setDarkMode(!darkMode)}}>
                {darkMode?  "🌞":"🌚"}
            </button>
        </div>
    );
}
 
export default Mode;