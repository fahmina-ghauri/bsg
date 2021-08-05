import React from 'react';
import "./middlemenu.css";
import { Link } from "react-router-dom";

class MiddleMenu extends React.Component {

    render() {
        return (
            <div className="row m-3 p-2">
                <div className="col-md-4"> 
                   <Link to="/bsg/" style={{textDecoration: "none" }}> <h2 className="h2 h2-border"> BSG INDUSTRIES</h2> </Link>
                </div>
                <div className="col-md-2"></div>

                <div className="col-md-3">
                    <div className="input-group">
                        <input type="text" className="form-control form-control-sm" placeholder="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-secondary py-0" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <form className="form-inline my-2 my-lg-0 dropdown">
                        <input className="form-control form-control-sm dropdown-toggle" type="dropdown" placeholder="Jump to Model" id="modeldropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                        <div className="dropdown-menu" aria-labelledby="modeldropdown">
                            <a className="dropdown-item" href="#">ABC</a>
                            <a className="dropdown-item" href="#">XYZ</a>
                            <a className="dropdown-item" href="#">GHI</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default MiddleMenu;