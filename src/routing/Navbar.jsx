import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <Link to="/">Home</Link>
            <Link to="/fashion">Fashion</Link>
            <Link to="/elec">Electronic</Link>
        </nav>
     );
}
 
export default Navbar;