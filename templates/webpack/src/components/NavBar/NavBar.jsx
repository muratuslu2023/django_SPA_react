import React,{} from "react";
import "./NavBar.css"
import { Link ,useLocation} from "react-router-dom";
const NavBar = () => {

    console.log(useLocation().pathname)
    

    return (
        <>
        
            <nav className="navbar">
                <div className="navbar-main-container">
                    <div>
                        <Link to="/" className="header">HelloWorld!</Link>
                    </div>
                    <div>

                    </div>
                    <div>
                        <ul className="navbar-list">
                            <li>
                                <Link to="/about" className="navbar-links">About</Link>
                            </li>
                            <li>
                                {/* <Link>Portfolio</Link> */}
                            </li>
                            <li>
                                <Link to={"/login"} className="navbar-links">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavBar;