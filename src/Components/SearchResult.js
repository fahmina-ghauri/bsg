import { Component } from "react";
import SearchData from '../enums/SearchData.json';
import { Link } from 'react-router-dom';

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.searchArr = SearchData
        this.state = {
            result: []
        };
    }


    componentDidMount() {
        console.log("SearchResult component did mount");

        let sValue = this.props.location.state;
        if (sValue == undefined) {
            console.log("search value: " + sValue);
            
        } else {
            sValue = this.props.location.state.key;
            var response = JSON.parse(JSON.stringify(this.searchArr));
            var arr = []
            let { result } = this.state;

            response.forEach(element => {
                if (element.keyword.toLowerCase().includes(sValue.toLowerCase())) {
                    result.push(element);
                    this.setState({ result: result });
                    console.log("value : " + element.keyword);
                }
            });
        }
    }

    render() {
        const data = this.state.result;

        return (
            <div>
                <h4>{data.map(d => (
                    <ul style={{ listStyleType: 'none', margin: "3%" }}>
                        <Link to={d.url}><li>{d.topic}</li></Link>
                        <p>{d.description}</p>
                    </ul>
                ))}</h4>
            </div>
        );
    }
}

export default SearchResult;