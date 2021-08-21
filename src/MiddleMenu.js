import React from 'react';
import "./middlemenu.css";
import { Link } from "react-router-dom";
import Search from './Components/Search';
import SearchData from './enums/SearchData.json';
import { Util } from './Utility/Util';
import Select from 'react-select';

class MiddleMenu extends React.Component {

    constructor(props) {
        super(props);
        this.modelsObj = Util.getModels();
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(v) {
        this.setState({value: v});
        window.location.assign(v.value);
    }

    render() {
        const models = this.modelsObj
        
        return (
            <div className="row m-3 p-2">
                <div className="col-md-4">
                    <Link to="/bsg/" style={{ textDecoration: "none" }}> <h2 className="h2 h2-border"> BSG INDUSTRIES</h2> </Link>
                </div>
                <div className="col-md-2"></div>

                <div className="col-md-3">
                    <Search data={SearchData}></Search>
                </div>
                <div className="col-md-3">
                    <form className="form-inline my-2 my-lg-0">
                        <Select classNamePrefix="mySelect" onChange={this.handleChange} isSearchable="true" placeholder="Jump to Model" value={this.state.value} options={models}></Select>
                    </form>
                </div >
            </div >
        );
    }
}


export default MiddleMenu;