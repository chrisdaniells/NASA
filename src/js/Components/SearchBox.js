import React from 'react';

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Nasa Search</h1>
                <div className="c-searchbox">
                    <form onSubmit={this.props.handleSearchSubmit}>
                        <input type="text" 
                            className="c-searchbox__input" 
                            placeholder="Enter Search Term for Lift Off"
                            onChange={this.props.handleQueryChange}
                            value={this.props.query}
                        />
                        <button 
                            type="submit"
                            className="c-searchbox__button" 
                        >
                            <img src="https://nasa.gov/sites/all/themes/custom/nasatwo/images/search.svg"
                                className="c-searchbox__button-icon" />
                        </button>
                    </form>

                    <div className="c-searchbox__filter">
                        <label className="c-searchbox__label">
                            <input type="checkbox" 
                                name="image"
                                className="c-searchbox__checkbox"
                                onChange={this.props.handleFilterCheckbox}
                                checked={this.props.filters.image}
                            />Images
                        </label>
                        <label className="c-searchbox__label">
                            <input type="checkbox" 
                                name="audio"
                                className="c-searchbox__checkbox"
                                onChange={this.props.handleFilterCheckbox}
                                checked={this.props.filters.audio}
                        />Audio
                        </label>
                    </div>
                </div>

            </div>
        )
    }
}