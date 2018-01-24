import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '',
            filters: {
                images: false,
                audio: false
            }
        }
    }
    handleQueryChange(event) {
        this.setState({ query: event.currentTarget.value });
    }
    handleFilterCheckbox(event) {
        const target = event.target;
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                [target.name]: target.checked
            }
        }));
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
                            <input type="checkbox" 
                                name="images"
                                className="c-searchbox__checkbox"
                                onChange={this.handleFilterCheckbox.bind(this)}
                                checked={this.state.filters.image}
                            />Images
                        </label>
                        <label className="c-searchbox__label">
                            <input type="checkbox" 
                                name="audio"
                                className="c-searchbox__checkbox"
                                onChange={this.handleFilterCheckbox.bind(this)}
                                checked={this.state.filters.audio}
                        />Audio
                        </label>
                    </div>
                </div>

            </div>
        )
    }
}