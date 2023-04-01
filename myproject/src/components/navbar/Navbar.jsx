import React from "react";
import { Link } from 'react-router-dom';
let Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                        <i className="fa fa-mobile text-warning"></i>contact <span className="text-warning">manager</span></Link>
                </div>
    
            </nav>

        </React.Fragment>
    )
};
export default Navbar;