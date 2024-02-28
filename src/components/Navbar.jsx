import { useState } from "react";

const Navbar = () => {

    let[showmenu , setShowMenu] = useState(false);

    return ( <nav>
                <h1>React.UI</h1>

                <button onClick={()=>{setShowMenu(!showmenu)}}>
                :

                </button>

                {showmenu && <div id="menubar">
                                <a href="">Home</a>
                                <a href="">services</a>
                                <a href="">About</a>
                                <a href="">Contact</a>
                                <a href="">Login</a>
                            </div>}
            </nav>);
}
 
export default Navbar;