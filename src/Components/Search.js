import { Component } from "react";
import SearchResult from "./SearchResult";
import { withRouter, useHistory, Link, Redirect } from 'react-router-dom';
import { createBrowserHistory, createLocation } from "history";

class Search extends Component {

    constructor(props) {
        super(props);
        this.searchArr = this.props.data;
        this.state = {
            searchValue: ''
        };

        this.changeSearchText = this.changeSearchText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeSearchText(e) {
        console.log("Search component onChange");
        this.setState({ searchValue: e.target.value });
    }

    handleSubmit() {
        console.log("submit button");
        if(window.location.href === "http://localhost:3000/bsg/search"){
            window.location.reload();
        }
    }

    render() {
        return (
            <div className="input-group">
                <input className="form-control form-control-md" type="text" placeholder="Search" aria-label="Search" onChange={this.changeSearchText} value={this.state.searchValue} />
                <div className="input-group-append">
                    <Link to={{
                        pathname: "/bsg/search",
                        state: {"key":this.state.searchValue }
                    }} type="Submit" onClick={this.handleSubmit} className="btn btn-secondary" id="basic-text1">
                        <i className="fa fa-search fa-sm"></i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Search;