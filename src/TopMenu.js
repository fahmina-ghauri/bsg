import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

class TopMenu extends React.Component {

    handleContactClick(e) {
        e.preventDefault();
        // alert("conact us page");
        
    }
    render() {
        return (
        
            <nav className="navbar navbar-expand-lg navbar-light py-0" style={{ backgroundColor: '#14697d'}}>
                {/* , borderBottom: '5px solid black' */}
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav left">
                        <li className="nav-item active">
                            <Link className="color nav-link" to="/bsg/contact">Contact Us <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="color nav-link" href="#">Members</a>
                        </li>
                        <li className="nav-item">
                            <a className="color nav-link" href="#">Find A Local Rep</a>
                        </li>
                        <li className="nav-item">
                            <a className="color nav-link" href="#">Careers</a>
                        </li>
                        <li className="nav-item">

                            <a href="#" class="fa fa-facebook fa-fw fa-social"></a>
                            <a href="#" class="fa fa-twitter fa-fw fa-social"></a>
                            <a href="#" class="fa fa-linkedin fa-fw fa-social"></a>
                            <a href="#" class="fa fa-youtube fa-fw fa-social"></a>

                        </li>
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                        {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
            
        );
    }
}

export default TopMenu;