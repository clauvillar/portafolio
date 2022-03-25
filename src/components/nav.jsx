import { Link } from "react-router-dom";

const Nav =()=> (
    <div>
        <ul>
            <Link to="/">
                <li>Home</li>
            </Link> 
            <Link to="/contact">
                <li>Contact</li>
            </Link>  
            <Link to="/about">
                <li>About</li>
            </Link>  
            
            
        </ul>
    </div>
);
export default Nav;