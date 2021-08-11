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
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Product</button>
                                <div className="dropdown-menu submenu1" aria-labelledby="dropdownMenu1" >
                                    <ul style={{float:'left'}}>
                                        <Link className="dropdown-item" type="button" to="/bsg/products/jetfan"><i className="fa fa-angle-right fa-fw icon-color"></i>Jet Fan</Link>
                                        <Link className="dropdown-item" type="button" to="/bsg/products/axialfan"><i className="fa fa-angle-right fa-fw icon-color"></i>Axial Fan</Link>
                                        <Link className="dropdown-item" type="button" to="/bsg/products/ccfan" ><i className="fa fa-angle-right fa-fw icon-color"></i>Centrifugal Cabinet Fan</Link>
                                        <Link className="dropdown-item" type="button" to="/bsg/products/epafan"><i className="fa fa-angle-right fa-fw icon-color"></i>Explosion Proof Axial Fan</Link>
                                    </ul>
                                    <ul style={{position: 'absolute', marginLeft: '230px'}}>
                                        <Link className="dropdown-item" type="button" to="/bsg/products/pfan"><i className="fa fa-angle-right fa-fw icon-color"></i>Propeller Fan</Link>
                                        <Link className="dropdown-item" type="button" to="/bsg/products/fcu"><i className="fa fa-angle-right fa-fw icon-color"></i>Fan Coil Units</Link>
                                        <Link className="dropdown-item" type="button" to="/bsg/products/ahu"><i className="fa fa-angle-right fa-fw icon-color"></i>Air Handling Units</Link>
                                    </ul></div>
                            </div>
                        </div>
                        <div className="col-md-3 bordercolor nav-item bordercolor">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Industries & Applications</button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <ul style={{float:'left'}}>
                                        
                                        <Link className="dropdown-item" type="button" to="/bsg/industries/automotive"><i className="fa fa-angle-right fa-fw icon-color"></i>Automotive</Link>
                                        <Link className="dropdown-item" type="button" to="/bsg/industries/power"><i className="fa fa-angle-right fa-fw icon-color"></i>Power Generation</Link>
                                        <Link className="dropdown-item" type="button" to="/bsg/industries/pharma"><i className="fa fa-angle-right fa-fw icon-color"></i>Pharmaceutical</Link>
                                        <Link className="dropdown-item" type="button" to="/bsg/industries/air-makeup"><i className="fa fa-angle-right fa-fw icon-color"></i>Air Make-up</Link>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col bordercolor nav-item bordercolor">
                            <div className="dropdown">
                                <Link to="/bsg/resources" className="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources</Link>
                                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                <ul style={{float:'left'}}>
                                        {/* <button className="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>abc</button>
                                        <button className="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>xyz</button>
                                        <button className="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>etc</button> */}
                                    {/* </ul> */}
                                {/* </div> */} 
                            </div>
                        </div>
                        <div className="col-md-3 bordercolor nav-item bordercolor">
                            <div className="dropdown">
                                <Link to="/bsg/testing" className="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Fan Testing & Services</Link>
                                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenu4">
                                <ul style={{float:'left'}}>
                                        <button className="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>abc</button>
                                        <button className="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>xyz</button>
                                        <button className="dropdown-item" type="button"><i className="fa fa-angle-right fa-fw icon-color"></i>xyz</button>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-2 bordercolor nav-item bordercolor">
                            <div className="dropdown">
                                <Link  to="/bsg/parts" className="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Parts & Services</Link>
                                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenu5">
                                    <button className="dropdown-item" type="button">Action</button>
                                    <button className="dropdown-item" type="button">Another action</button>
                                    <button className="dropdown-item" type="button">Something else here</button>
                                </div> */}
                            </div>
                        </div>
                        <div className="col bordercolor nav-item bordercolor">
                            <div className="dropdown">
                                <Link to="/bsg/fanpedia" className="btn btn-light dropdown-toggle itemcolor py-0" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Fanpedia</Link>
                                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenu6">
                                    <button className="dropdown-item" type="button">Action</button>
                                    <button className="dropdown-item" type="button">Another action</button>
                                    <button className="dropdown-item" type="button">Something else here</button>
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
