import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }
    triggerSearchClick() {
        // Form submit - see github Readme
        document.getElementById('searchButton').click();
    }
    render() {
        return (
            <div>
                <h1>Nasa Search</h1>
                <div className="c-searchbox">
                    <form onSubmit={this.triggerSearchClick}>
                        <input type="text" 
                            className="c-searchbox__input" 
                            placeholder="Enter Search Term for Lift Off"
                            onChange={this.props.handleQueryChange}
                            value={this.props.query}
                        />
                        <Link to={'/search/' + this.props.query + '/' + this.props.filter}
                            className="c-searchbox__button"
                            id="searchButton"
                            onClick={this.props.handleSearchSubmit}
                        >
                            <img src="https://nasa.gov/sites/all/themes/custom/nasatwo/images/search.svg"
                                className="c-searchbox__button-icon" />
                        </Link>
                    </form>

                    <div className="c-searchbox__filter">
                        <label className="c-searchbox__label">
                            <input type="checkbox" 
                                name="image"
                                className="c-searchbox__checkbox"
                                onChange={this.props.handleFilterCheckbox}
                                checked={this.props.filter=="image"}
                            />Images
                        </label>
                        <label className="c-searchbox__label">
                            <input type="checkbox" 
                                name="audio"
                                className="c-searchbox__checkbox"
                                onChange={this.props.handleFilterCheckbox}
                                checked={this.props.filter=="audio"}
                        />Audio
                        </label>
                    </div>
                </div>

            </div>
        )
    }
}