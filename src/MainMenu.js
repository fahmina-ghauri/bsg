import React from 'react';
import './mainmenu.css';
import { Link } from 'react-router-dom';

class MainMenu extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand navbar-light" style={{ height: '50px', borderBottom: '2px solid black' }}>
                <div className="row collapse navbar-collapse h-100" id="navbarSupportedContent">
                    <div className="col navbar-nav h-55">
                        <div className="col nav-item active bordercolor">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Product</button>
                                <div class="dropdown-menu submenu1" aria-labelledby="dropdownMenu1" >
                                    <ul style={{float:'left'}}>
                                        <Link class="dropdown-item" type="button" to="/products/jetfan"><i className="fa fa-angle-right fa-fw icon-color"></i>Jet Fan</Link>
                                        <Link class="dropdown-item" type="button" to="/products/axialfan"><i className="fa fa-angle-right fa-fw icon-color"></i>Axial Fan</Link>
                                        <Link class="dropdown-item" type="button" to="/products/ccfan" ><i className="fa fa-angle-right fa-fw icon-color"></i>Centrifugal Cabinet Fan</Link>
                                        <Link class="dropdown-item" type="button" to="/products/epafan"><i className="fa fa-angle-right fa-fw icon-color"></i>Explosion Proof Axial Fan</Link>
                                    </ul>
                                    <ul style={{position: 'absolute', marginLeft: '230px'}}>
                                        <Link class="dropdown-item" type="button" to="/products/pfan"><i className="fa fa-angle-right fa-fw icon-color"></i>Propeller Fan</Link>
                                        <Link class="dropdown-item" type="button" to="/products/fcu"><i className="fa fa-angle-right fa-fw icon-color"></i>Fan Coil Units</Link>
                                        <Link class="dropdown-item" type="button" to="/products/ahu"><i className="fa fa-angle-right fa-fw icon-color"></i>Air Handling Units</Link>
                                    </ul></div>
                            </div>
                        </div>
                        <div className="col-md-3 bordercolor nav-item bordercolor">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Industries & Applications</button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <ul style={{float:'left'}}>
                                        
                                        <Link class="dropdown-item" type="button" to="/industries/automotive"><i className="fa fa-angle-right fa-fw icon-color"></i>Automotive</Link>
                                        <Link class="dropdown-item" type="button" to="/industries/power"><i className="fa fa-angle-right fa-fw icon-color"></i>Power Generation</Link>
                                        <Link class="dropdown-item" type="button" to="/industries/pharma"><i className="fa fa-angle-right fa-fw icon-color"></i>Pharmaceutical</Link>
                                        <Link class="dropdown-item" type="button" to="/industries/air-makeup"><i className="fa fa-angle-right fa-fw icon-color"></i>Air Make-up</Link>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col bordercolor nav-item bordercolor">
                            <div class="dropdown">
                                <Link to="/resources" class="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources</Link>
                                {/* <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
                                <ul style={{float:'left'}}>
                                        {/* <button class="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>abc</button>
                                        <button class="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>xyz</button>
                                        <button class="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>etc</button> */}
                                    {/* </ul> */}
                                {/* </div> */} 
                            </div>
                        </div>
                        <div className="col-md-3 bordercolor nav-item bordercolor">
                            <div class="dropdown">
                                <Link to="/testing" class="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Fan Testing & Services</Link>
                                {/* <div class="dropdown-menu" aria-labelledby="dropdownMenu4">
                                <ul style={{float:'left'}}>
                                        <button class="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>abc</button>
                                        <button class="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>xyz</button>
                                        <button class="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>xyz</button>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-2 bordercolor nav-item bordercolor">
                            <div class="dropdown">
                                <Link  to="/parts" class="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Parts & Services</Link>
                                {/* <div class="dropdown-menu" aria-labelledby="dropdownMenu5">
                                    <button class="dropdown-item" type="button">Action</button>
                                    <button class="dropdown-item" type="button">Another action</button>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </div> */}
                            </div>
                        </div>
                        <div className="col bordercolor nav-item bordercolor">
                            <div class="dropdown">
                                <Link to="/fanpedia" class="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Fanpedia</Link>
                                {/* <div class="dropdown-menu" aria-labelledby="dropdownMenu6">
                                    <button class="dropdown-item" type="button">Action</button>
                                    <button class="dropdown-item" type="button">Another action</button>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        );
    }
}

export default MainMenu;
