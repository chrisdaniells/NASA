import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
    }
    handleQueryChange(event) {
        this.setState({ query: event.currentTarget.value });
    }
    render() {
        return (
            <div>
                <h1>Nasa Search</h1>
                <div className="c-searchbox">
                    <input type="text" 
                        className="c-searchbox__input" 
                        placeholder="Enter Search Term for Lift Off"
                        onChange={this.handleQueryChange.bind(this)}
                        value={this.state.query}
                    />
                    <Link to={"/search/" + this.state.query} className="c-searchbox__button">
                        <img src="https://nasa.gov/sites/all/themes/custom/nasatwo/images/search.svg"
                            className="c-searchbox__button-icon" />
                    </Link>
                    <div className="c-searchbox__filter">
                        <label className="c-searchbox__label">
                            <input type="checkbox" className="c-searchbox__checkbox" />Images
                        </label>
                        <label className="c-searchbox__label">
                            <input type="checkbox" className="c-searchbox__checkbox" />Audio
                        </label>
                    </div>
                </div>

            </div>
        )
    }
}